import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'ngx-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {


  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Name',
      },
      city: {
        title: 'City',
      },
    },
    attr: {
      class: 'table table-bordered table-striped table-hover table-sm',
    },
  };

  data = [];

  constructor(private dataService : DataService) {
  }

  ngOnInit() {
    this.dataService.getHospitals().subscribe(h => this.data = h);
  }
}
