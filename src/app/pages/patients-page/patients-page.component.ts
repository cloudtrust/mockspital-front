import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BusinessService } from '../../@core/data/business.service';

@Component({
  selector: 'ngx-patients-page',
  templateUrl: './patients-page.component.html',
})
export class PatientsPageComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getPatients().subscribe(p => this.source.load(p));
  }

}
