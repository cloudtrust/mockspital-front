import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../@core/data/backend.service';

@Component({
  selector: 'ngx-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit {

  settings = {
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
    attr: {
      class: 'table table-bordered table-striped table-hover table-sm',
    },
  };

  data = [];

  constructor(private dataService: BackendService) {
  }

  ngOnInit() {
    this.dataService.getDepartments().subscribe(d => this.data = d);
  }

}
