import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BusinessService } from '../../@core/data/business.service';
import { Hospital } from '../../domain/hospital';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  filesSource: LocalDataSource = new LocalDataSource();
  hospitals: Hospital[];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getMedicalFiles().subscribe(f => this.filesSource.load(f));
    this.business.getHospitals().subscribe(h => this.hospitals = h);
  }

}
