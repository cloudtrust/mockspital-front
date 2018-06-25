import { Injectable } from '@angular/core';
import { BackendService } from '../utils/backend.service';
import { Observable } from 'rxjs';
import { switchMap, shareReplay } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer';

const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;

@Injectable()
export class BusinessService {

  caches: {
    'departments': Observable<Object[]>;
    'doctors': Observable<Object[]>;
    'hospitals': Observable<Object[]>;
    'patients': Observable<Object[]>;
    'medical files': Observable<Object[]>;
  }

  constructor(private backend: BackendService) {
  }

  // https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html

  private getCached(entityName: string, f: () => Observable<Object[]>): Observable<Object[]> {
    if (!caches[entityName]) {
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0, REFRESH_INTERVAL);

      // For each tick make an http request to fetch new data
      caches[entityName] = timer$.pipe(
        switchMap(f),
        shareReplay(CACHE_SIZE),
      );

    } else {
      console.info('Obtaining all ' + entityName + ' from the cache.');
    }
    return caches[entityName];
  }

  getHospitals(): Observable<Object[]> {
    return this.getCached('hospitals', () => this.backend.getHospitals());
  }

  getDepartments(): Observable<Object[]> {
    return this.getCached('departments', () => this.backend.getDepartments());
  }

  getDoctors(): Observable<Object[]> {
    return this.getCached('doctors', () => this.backend.getDoctors());
  }

  getPatients(): Observable<Object[]> {
    return this.getCached('patients', () => this.backend.getPatients());
  }

  getMedicalFiles(): Observable<Object[]> {
    return this.getCached('medical files', () => this.backend.getMedicalFiles());
  }
}
