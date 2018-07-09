import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../@core/data/business.service';
import { Hospital } from '../../domain/hospital';
import { File } from '../../domain/files';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  files: File[];
  hospitals: Hospital[];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getMedicalFiles().subscribe(f => this.files = f);
    this.business.getHospitals().subscribe(h => this.hospitals = h);
  }

}
