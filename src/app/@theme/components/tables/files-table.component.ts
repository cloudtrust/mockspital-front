import { Component, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HelpersService } from '../../../@core/utils/helpers.service';

@Component({
  selector: 'ngx-files-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
})
export class FilesTableComponent {

  settings = this.helpers.buildTableSettings({
    columns: {
      id: {
        title: 'ID',
      },
      patientAvsNumber: {
        title: 'Patient AVS Number',
      },
      doctorId: {
        title: 'Doctor ID',
      },
      data: {
        title: 'Data',
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
