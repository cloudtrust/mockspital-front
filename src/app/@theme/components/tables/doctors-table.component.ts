import { Component, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HelpersService } from '../../../@core/utils/helpers.service';

@Component({
  selector: 'ngx-doctors-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
})
export class DoctorsTableComponent {

  settings = this.helpers.buildTableSettings({
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

  constructor(private helpers: HelpersService) {}

  @Input()
  source: LocalDataSource;

  onDeleteConfirm(event) {
    this.helpers.onDeleteConfirm(event);
  }

}
