import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../@core/data/backend.service';

@Component({
  selector: 'ngx-doctors-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class DoctorsTableComponent implements OnInit {

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
      departments: {
        title: 'Department ID',
        valuePrepareFunction: function (d) {
          return d[0]['id'];
        },
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
    this.dataService.getDoctors().subscribe(d => this.data = d);
  }

}
