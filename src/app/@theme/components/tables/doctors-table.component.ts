import { Component, Input } from '@angular/core';
import { buildTableSettings, onDeleteConfirm } from './global-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-doctors-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
})
export class DoctorsTableComponent {

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
    },
  });

  @Input()
  source: LocalDataSource;

  onDeleteConfirm(event) {
    onDeleteConfirm(event);
  }

}
