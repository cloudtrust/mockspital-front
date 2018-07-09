import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../@core/data/business.service';
import { Hospital } from '../../domain/hospital';

@Component({
  selector: 'ngx-hospitals-page',
  templateUrl: './hospitals-page.component.html',
})
export class HospitalsPageComponent implements OnInit {

  hospitals: Hospital[];

  constructor(private business: BusinessService) { }

  ngOnInit() {
    this.business.getHospitals().subscribe(h => this.hospitals = h);
  }

}
