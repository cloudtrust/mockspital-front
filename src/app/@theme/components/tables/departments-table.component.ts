import { Component, Input } from '@angular/core';
import { Department } from '../../../domain/departements';

@Component({
  selector: 'ngx-departments-table',
  template: `
              <p-table [value]="departments">
                <ng-template pTemplate="header">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Hospital ID</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-department>
                    <tr>
                        <td>{{department.id}}</td>
                        <td>{{department.name}}</td>
                        <td>{{department.hospital.id}}</td>
                    </tr>
                </ng-template>
              </p-table>
  `,
})
export class DepartmentsTableComponent {

  @Input()
  departments: Department[];

}
