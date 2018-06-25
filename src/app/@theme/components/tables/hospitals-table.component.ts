import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../@core/data/business.service';

@Component({
  selector: 'ngx-hospitals-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class HospitalsTableComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Name',
      },
      city: {
        title: 'City',
      },
    },
    attr: {
      class: 'table table-bordered table-striped table-hover table-sm',
    },
  };

  data = [];

  constructor(private business: BusinessService) { }

  ngOnInit() {
    this.business.getHospitals().subscribe(h => this.data = h);
  }

}
