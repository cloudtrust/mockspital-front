import { Component, OnInit, Output } from '@angular/core';
import { BusinessService } from '../../@core/data/business.service';
import { File } from '../../domain/files';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'ngx-files-page',
  templateUrl: './files-page.component.html',
})
export class FilesPageComponent {

  @Output()
  files: File[];

  constructor(private business: BusinessService) {
  }

  onLazyLoad(event: LazyLoadEvent) {
    this.business.getMedicalFilesRange(event.first, event.rows).subscribe(f => this.files = f);
  }

}
