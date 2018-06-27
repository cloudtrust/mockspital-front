import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../@core/data/business.service';
import { buildTableSettings, onDeleteConfirm } from './global-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-hospitals-table',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
})
export class HospitalsTableComponent implements OnInit {

  settings = buildTableSettings({
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
  });

  source: LocalDataSource = new LocalDataSource();

  constructor(private business: BusinessService) { }

  ngOnInit() {
    this.business.getHospitals().subscribe(h => this.source.load(h));
  }

  onDeleteConfirm(event) {
    onDeleteConfirm(event);
  }


}
