import { Component, OnInit } from '@angular/core';

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

  constructor(/* private backend : ServerCommService */) {
  }

  ngOnInit() {
    /*this.backend.getHospitals().subscribe(h => this.data = h);*/
  }
}
