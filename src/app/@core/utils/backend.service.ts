import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable ,  of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EventSourcePolyfill } from 'ng-event-source';
import { Hospital } from '../../domain/hospital';
import { Department } from '../../domain/departements';
import { Doctor } from '../../domain/doctors';
import { Patient } from '../../domain/patients';
import { File } from '../../domain/files';

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  eventSource: EventSourcePolyfill;

  backend = 'http://localhost:8000';
  backendSse = 'http://localhost:3000';
  sseChannel = 'channel-2';

  constructor(private http: HttpClient) {
    this.connect();
  }

  /**
   * SSE
   */

  isConnectingOrConnected(): boolean {
    return this.eventSource &&
      (this.eventSource.readyState === this.eventSource.CONNECTING || this.eventSource.readyState === this.eventSource.OPEN);
  }

  isConnected(): boolean {
    return this.eventSource && this.eventSource.readyState === this.eventSource.OPEN;
  }

  isDisconnected(): boolean {
    return !this.eventSource || this.eventSource.readyState === this.eventSource.CLOSED;
  }

  connect(): void {
    if (this.isDisconnected()) {
      console.info('SSE connection in progress...');
      this.eventSource = new EventSourcePolyfill(this.backendSse + '/events/' + this.sseChannel, {
      });
      this.eventSource.onmessage = (data => {
        console.info(data);
      });
      this.eventSource.onopen = (a) => {
        console.info('SSE connection established!');
      };
      this.eventSource.onerror = (e) => {
        console.error(e);
      }
    }
  }

  disconnect(): void {
    if (this.isConnectingOrConnected()) {
      const message = this.isConnected() ? 'SSE connection closed.' : 'SSE connection aborted.';
      this.eventSource.close();
      console.info(message);
    }
  }

  /**
   * Queries to the backend
   */
  getHospitals(): Observable<Hospital[]> {
    console.info('Obtaining all hospitals from the backend...');
    return this.http.get<Hospital[]>(this.backend + '/hospitals')
      .pipe(
        catchError(this.handleError('getHospitals', [])),
    );
  }

  getDepartments(): Observable<Department[]> {
    console.info('Obtaining all departments from the backend...');
    return this.http.get<Department[]>(this.backend + '/departments')
      .pipe(
        catchError(this.handleError('getDepartments', [])),
    );
  }

  getDoctors(): Observable<Doctor[]> {
    console.info('Obtaining all doctors from the backend...');
    return this.http.get<Doctor[]>(this.backend + '/doctors')
      .pipe(
        catchError(this.handleError('getDoctors', [])),
    );
  }

  getPatients(): Observable<Patient[]> {
    console.info('Obtaining all patients from the backend...');
    return this.http.get<Patient[]>(this.backend + '/patients')
      .pipe(
        catchError(this.handleError('getPatients', [])),
    );
  }

  getMedicalFiles(): Observable<File[]> {
    console.info('Obtaining all medical files from the backend...');
    return this.http.get<File[]>(this.backend + '/files')
      .pipe(
        catchError(this.handleError('getMedicalFiles', [])),
    );
  }

  getMedicalFilesRange(first, rows): Observable<File[]> {
    console.info('Obtaining some medical files from the backend (' + first + ',' + rows + ')...');
    return this.http.get<File[]>(this.backend + '/files?first=' + first + '&rows=' + rows)
      .pipe(
        catchError(this.handleError('getMedicalFiles', [])),
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
