import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BusinessService } from '../../@core/data/business.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  filesSource: LocalDataSource = new LocalDataSource();
  hospitalsSource: LocalDataSource = new LocalDataSource();

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getMedicalFiles().subscribe(f => this.filesSource.load(f));
    this.business.getHospitals().subscribe(f => this.hospitalsSource.load(f));
  }

}
