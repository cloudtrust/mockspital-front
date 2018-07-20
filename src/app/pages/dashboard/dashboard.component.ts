import { Component, OnInit, Output } from '@angular/core';
import { BusinessService } from '../../@core/data/business.service';
import { Hospital } from '../../domain/hospital';
import { File } from '../../domain/files';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  @Output()
  filesA: File[];

  @Output()
  filesACount: number;

  @Output()
  filesB: File[];

  @Output()
  filesBCount: number;

  hospitals: Hospital[];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getHospitals().subscribe(h => this.hospitals = h);
  }

  onMFALazyLoad(event: LazyLoadEvent) {
    this.business.getMedicalFilesRange(event.first, event.rows).subscribe(p => {
      this.filesA = p['data'];
      this.filesACount = p['count'];
    });
  }

  onMFBLazyLoad(event: LazyLoadEvent) {
    this.business.getMedicalFilesRange(event.first, event.rows).subscribe(p => {
      this.filesB = p['data'];
      this.filesBCount = p['count'];
    });
  }

}
