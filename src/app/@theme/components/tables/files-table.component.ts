import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../@core/data/business.service';
import { buildTableSettings, onDeleteConfirm } from './global-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-files-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
})
export class FilesTableComponent implements OnInit {

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

  source: LocalDataSource = new LocalDataSource();

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getMedicalFiles().subscribe(f => this.source.load(f));
  }

  onDeleteConfirm(event) {
    onDeleteConfirm(event);
  }

}
