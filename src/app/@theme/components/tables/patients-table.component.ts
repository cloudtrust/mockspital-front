import { Component, Input } from '@angular/core';
import { buildTableSettings, onDeleteConfirm } from './global-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-patients-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
})
export class PatientsTableComponent {

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

  @Input()
  source: LocalDataSource;

  onDeleteConfirm(event) {
    onDeleteConfirm(event);
  }

}
