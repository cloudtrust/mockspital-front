import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../@core/data/business.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-doctors-page',
  templateUrl: './doctors-page.component.html',
})
export class DoctorsPageComponent implements OnInit {

  constructor(private business: BusinessService) {
  }

  source: LocalDataSource = new LocalDataSource();

  ngOnInit() {
    this.business.getDoctors().subscribe(d => this.source.load(d));
  }

}
