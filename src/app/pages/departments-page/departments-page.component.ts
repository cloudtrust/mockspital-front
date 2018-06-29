import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BusinessService } from '../../@core/data/business.service';

@Component({
  selector: 'ngx-departments-page',
  templateUrl: './departments-page.component.html',
})
export class DepartmentsPageComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getDepartments().subscribe(d => this.source.load(d));
  }
}
