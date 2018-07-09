import { Component, Input } from '@angular/core';
import { Hospital } from '../../../domain/hospital';

@Component({
  selector: 'ngx-hospitals-table',
  template: `
              <p-table [value]="hospitals">
                <ng-template pTemplate="header">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-hospital>
                    <tr>
                        <td>{{hospital.id}}</td>
                        <td>{{hospital.name}}</td>
                        <td>{{hospital.city}}</td>
                    </tr>
                </ng-template>
              </p-table>
  `,
})
export class HospitalsTableComponent {

  @Input()
  hospitals: Hospital[];

}
