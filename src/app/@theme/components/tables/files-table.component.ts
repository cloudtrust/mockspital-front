import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../@core/data/business.service';
import { buildTableSettings } from './global-settings';

@Component({
  selector: 'ngx-files-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
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

  data = [];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getMedicalFiles().subscribe(d => this.data = d);
  }

}
