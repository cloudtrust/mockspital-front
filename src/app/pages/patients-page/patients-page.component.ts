import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../@core/data/business.service';
import { Patient } from '../../domain/patients';

@Component({
  selector: 'ngx-patients-page',
  templateUrl: './patients-page.component.html',
})
export class PatientsPageComponent implements OnInit {

  patients: Patient[];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getPatients().subscribe(p => this.patients = p);
  }

}
