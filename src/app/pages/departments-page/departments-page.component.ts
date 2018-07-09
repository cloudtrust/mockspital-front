import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../@core/data/business.service';
import { Department } from '../../domain/departements';

@Component({
  selector: 'ngx-departments-page',
  templateUrl: './departments-page.component.html',
})
export class DepartmentsPageComponent implements OnInit {

  departments: Department[];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getDepartments().subscribe(d => this.departments = d);
  }
}
