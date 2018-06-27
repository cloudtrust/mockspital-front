import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../@core/data/business.service';
import { buildTableSettings, onDeleteConfirm } from './global-settings';

@Component({
  selector: 'ngx-doctors-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
})
export class DoctorsTableComponent implements OnInit {

  settings = buildTableSettings({
    columns: {
      id: {
        title: 'ID',
      },
      firstName: {
        title: 'First name',
      },
      lastName: {
        title: 'Last name',
      },
      departments: {
        title: 'Department ID',
        valuePrepareFunction: function (d) {
          return d[0]['id'];
        },
      },
    }
  });
  
  data = [];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getDoctors().subscribe(d => this.data = d);
  }

  onDeleteConfirm(event) {
    onDeleteConfirm(event);
  }

}
