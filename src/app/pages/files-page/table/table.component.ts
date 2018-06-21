import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../@core/data/backend.service';

@Component({
  selector: 'ngx-files-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class FilesTableComponent implements OnInit {

  settings = {
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
    attr: {
      class: 'table table-bordered table-striped table-hover table-sm',
    },
  };

  data = [];

  constructor(private dataService: BackendService) {
  }

  ngOnInit() {
    this.dataService.getMedicalFiles().subscribe(d => this.data = d);
  }

}
