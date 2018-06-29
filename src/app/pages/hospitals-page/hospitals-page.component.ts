import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../@core/data/business.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-hospitals-page',
  templateUrl: './hospitals-page.component.html',
})
export class HospitalsPageComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  constructor(private business: BusinessService) { }

  ngOnInit() {
    this.business.getHospitals().subscribe(h => this.source.load(h));
  }

}
