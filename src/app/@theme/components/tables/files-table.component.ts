import { Component, Input, Output, EventEmitter } from '@angular/core';
import { File } from '../../../domain/files';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'ngx-files-table',
  template: `
              <p-table [value]="files" [paginator]="true" [rows]="rows" [lazy]="true"
                       [totalRecords]="totalRecords" (onLazyLoad)="onLazyLoad.emit($event)">
                <ng-template pTemplate="header">
                    <tr>
                        <th>ID</th>
                        <th>Patient AVS Number</th>
                        <th>Doctor ID</th>
                        <th>Data</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-file>
                    <tr>
                        <td>{{file.id}}</td>
                        <td>{{file.patientAvsNumber}}</td>
                        <td>{{file.doctorId}}</td>
                        <td>{{file.data}}</td>
                    </tr>
                </ng-template>
              </p-table>
  `,
})
export class FilesTableComponent {

  @Input()
  files: File[];

  @Input()
  rows: number = 10;

  @Output()
  onLazyLoad = new EventEmitter<LazyLoadEvent>();

  totalRecords: number = 33;

}
