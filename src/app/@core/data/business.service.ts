import { Injectable } from '@angular/core';
import { BackendService } from '../utils/backend.service';
import { Observable ,  timer } from 'rxjs';
import { switchMap, shareReplay } from 'rxjs/operators';
import { Hospital } from '../../domain/hospital';
import { Doctor } from '../../domain/doctors';
import { Department } from '../../domain/departements';
import { Patient } from '../../domain/patients';
import { File } from '../../domain/files';

// How many versions to keep in the cache
const CACHE_SIZE = 1;

// How often to refresh the cache
const REFRESH_INTERVAL = 10000;

@Injectable()
export class BusinessService {

  // This object contains the business caches
  caches: {
    'departments': Observable<Department[]>;
    'doctors': Observable<Doctor[]>;
    'hospitals': Observable<Hospital[]>;
    'patients': Observable<Patient[]>;
    'medical files': Observable<File[]>;
  }

  constructor(private backend: BackendService) {
  }

  // Inspiration : https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html
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
      console.info('Obtaining all ' + entityName + ' from the cache...');
    }
    return caches[entityName];
  }

  getHospitals(): Observable<any[]> {
    return this.getCached('hospitals', () => this.backend.getHospitals());
  }

  getDepartments(): Observable<any[]> {
    return this.getCached('departments', () => this.backend.getDepartments());
  }

  getDoctors(): Observable<any[]> {
    return this.getCached('doctors', () => this.backend.getDoctors());
  }

  getPatients(): Observable<any[]> {
    return this.getCached('patients', () => this.backend.getPatients());
  }

  getMedicalFiles(): Observable<any[]> {
    return this.getCached('medical files', () => this.backend.getMedicalFiles());
  }
}
