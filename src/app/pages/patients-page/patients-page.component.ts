import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../@core/data/backend.service';

@Component({
  selector: 'ngx-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.scss'],
})
export class PatientsPageComponent implements OnInit {

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

  constructor(private dataService: BackendService) {
  }

  ngOnInit() {
    this.dataService.getPatients().subscribe(p => this.data = p);
  }

}
