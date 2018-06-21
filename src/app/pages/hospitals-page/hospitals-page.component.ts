import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../@core/data/backend.service';

@Component({
  selector: 'ngx-hospitals-page',
  templateUrl: './hospitals-page.component.html',
})
export class HospitalsPageComponent implements OnInit {

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

  constructor(private dataService: BackendService) {
  }

  ngOnInit() {
    this.dataService.getHospitals().subscribe(h => this.data = h);
  }
}
