import { Component, Input } from '@angular/core';
import { buildTableSettings, onDeleteConfirm } from './global-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-files-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
})
export class FilesTableComponent {

  settings = buildTableSettings({
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

  @Input()
  source: LocalDataSource;

  onDeleteConfirm(event) {
    onDeleteConfirm(event);
  }

}
