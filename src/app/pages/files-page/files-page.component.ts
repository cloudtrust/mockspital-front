import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BusinessService } from '../../@core/data/business.service';

@Component({
  selector: 'ngx-files-page',
  templateUrl: './files-page.component.html',
})
export class FilesPageComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getMedicalFiles().subscribe(f => this.source.load(f));
  }

}
