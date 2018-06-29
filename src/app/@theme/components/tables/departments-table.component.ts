import { Component, Input } from '@angular/core';
import { buildTableSettings, onDeleteConfirm } from './global-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-departments-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
})
export class DepartmentsTableComponent {

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
    },
  });

  @Input()
  source: LocalDataSource;

  onDeleteConfirm(event) {
    onDeleteConfirm(event);
  }

}
