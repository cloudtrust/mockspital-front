import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doctors-component',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      firstName: {
        title: 'First name'
      },
      lastName: {
        title: 'Last name'
      },
      departments: {
        title: 'Department ID',
        valuePrepareFunction: function(d) {
          return d[0]["id"];
        }
      }
    },
    attr: {
      class: 'table table-bordered table-striped table-hover table-sm'
    }
  };

  data = [];
  
  constructor() { }

  ngOnInit() {
  }

}
