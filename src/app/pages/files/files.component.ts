import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      patientAvsNumber: {
        title: 'Patient AVS Number'
      },
      doctorId: {
        title: 'Doctor ID'
      },
      data: {
        title: 'Data'
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
