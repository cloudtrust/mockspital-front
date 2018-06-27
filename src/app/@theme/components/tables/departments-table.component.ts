import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../@core/data/business.service';
import { buildTableSettings } from './global-settings';

@Component({
  selector: 'ngx-departments-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class DepartmentsTableComponent implements OnInit {

  settings = buildTableSettings({
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
    }
  });

  data = [];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getDepartments().subscribe(d => this.data = d);
  }

}
