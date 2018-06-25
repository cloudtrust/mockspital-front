import { Injectable } from '@angular/core';
import { BackendService } from '../utils/backend.service';
import { Observable } from 'rxjs';
import { switchMap, shareReplay } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer';

const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;

@Injectable()
export class BusinessService {

  private departmentsCache$: Observable<Object[]>;
  private doctorsCache$: Observable<Object[]>;
  private hospitalsCache$: Observable<Object[]>;
  private patientsCache$: Observable<Object[]>;
  private medicalFilesCache$: Observable<Object[]>;

  constructor(private backend: BackendService) {
  }

  // https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html

  private getCached(entityName: string, cache: Observable<Object[]>, f: () => Observable<Object[]>): Observable<Object[]> {
    var cached = this.hospitalsCache$;
    if (!cached) {
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0, REFRESH_INTERVAL);

      // For each tick make an http request to fetch new data
      this.hospitalsCache$ = timer$.pipe(
        switchMap(f),
        shareReplay(CACHE_SIZE)
      );

    } else {
      console.info('Obtaining all ' + entityName + ' from the cache.');
    }
    return this.hospitalsCache$;
  }

  getHospitals(): Observable<Object[]> {
    return this.getCached('hospitals', this.hospitalsCache$, () => { return this.backend.getHospitals() });
  }

  getDepartments(): Observable<Object[]> {
    return this.getCached('departments', this.departmentsCache$, () => { return this.backend.getDepartments() });
  }

  getDoctors(): Observable<Object[]> {
    return this.getCached('doctors', this.doctorsCache$, () => { return this.backend.getDoctors() });
  }

  getPatients(): Observable<Object[]> {
    return this.getCached('patients', this.patientsCache$, () => { return this.backend.getPatients() });
  }

  getMedicalFiles(): Observable<Object[]> {
    return this.getCached('medical files', this.medicalFilesCache$, () => { return this.backend.getMedicalFiles() });
  }
}
