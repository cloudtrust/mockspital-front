import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../@core/data/business.service';

@Component({
  selector: 'ngx-patients-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class PatientsTableComponent implements OnInit {

  settings = {
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
    attr: {
      class: 'table table-bordered table-striped table-hover table-sm',
    },
  };

  data = [];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getPatients().subscribe(p => this.data = p);
  }

}
