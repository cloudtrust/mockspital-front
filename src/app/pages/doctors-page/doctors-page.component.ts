import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../@core/data/business.service';
import { Doctor } from '../../domain/doctors';

@Component({
  selector: 'ngx-doctors-page',
  templateUrl: './doctors-page.component.html',
})
export class DoctorsPageComponent implements OnInit {

  constructor(private business: BusinessService) {
  }

  doctors: Doctor[];

  ngOnInit() {
    this.business.getDoctors().subscribe(d => this.doctors = d);
  }

}
