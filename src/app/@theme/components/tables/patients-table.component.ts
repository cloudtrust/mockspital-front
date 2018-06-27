import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../@core/data/business.service';
import { buildTableSettings, onDeleteConfirm } from './global-settings';

@Component({
  selector: 'ngx-patients-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
})
export class PatientsTableComponent implements OnInit {

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
      birthDate: {
        title: 'Birthdate',
        valuePrepareFunction: function (b) {
          return b.substring(0, 10);
        },
      },
      avsNumber: {
        title: 'AVS Number',
      },
    },
  });

  data = [];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getPatients().subscribe(p => this.data = p);
  }

  onDeleteConfirm(event) {
    onDeleteConfirm(event);
  }

}
