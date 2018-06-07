import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

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
      birthDate: {
        title: 'Birthdate',
        valuePrepareFunction: function(b) {
          return b.substring(0,10);
        }
      },
      avsNumber: {
        title: 'AVS Number'
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
