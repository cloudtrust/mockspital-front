import { Injectable } from '@angular/core';
import { BackendService } from '../utils/backend.service';
import { Observable } from 'rxjs';

@Injectable()
export class BusinessService {

  constructor(private backend: BackendService) {
  }

  // TODO : Cache!

  getHospitals(): Observable<Object[]> {
    return this.backend.getHospitals();
  }

  getDepartments(): Observable<Object[]> {
    return this.backend.getDepartments();
  }

  getDoctors(): Observable<Object[]> {
    return this.backend.getDoctors();
  }

  getPatients(): Observable<Object[]> {
    return this.backend.getPatients();
  }

  getMedicalFiles(): Observable<Object[]> {
    return this.backend.getMedicalFiles();
  }
}
