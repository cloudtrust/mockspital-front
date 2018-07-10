import { Component, Input } from '@angular/core';
import { File } from '../../../domain/files';

@Component({
  selector: 'ngx-files-table',
  template: `
              <p-table [value]="files" [paginator]="true" [rows]="rows">
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

}
