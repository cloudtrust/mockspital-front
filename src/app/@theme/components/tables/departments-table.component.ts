import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../@core/data/business.service';

@Component({
  selector: 'ngx-departments-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class DepartmentsTableComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Name',
      },
      hospital: {
        title: 'Hospital ID',
        valuePrepareFunction: function (d) {
          return d['id'];
        },
      },
    },
    attr: {
      class: 'table table-bordered table-striped table-hover table-sm',
    },
  };

  data = [];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getDepartments().subscribe(d => this.data = d);
  }

}
