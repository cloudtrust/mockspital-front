import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../@core/data/business.service';
import { File } from '../../domain/files';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'ngx-files-page',
  templateUrl: './files-page.component.html',
})
export class FilesPageComponent implements OnInit {

  files: File[];

  constructor(private business: BusinessService) {
  }

  ngOnInit() {
    this.business.getMedicalFiles().subscribe(f => this.files = f);
  }

  onLazyLoad(event: LazyLoadEvent) {
    console.info('Lazy load triggered!');
  }

}
