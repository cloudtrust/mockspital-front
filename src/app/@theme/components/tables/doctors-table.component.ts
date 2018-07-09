import { Component, Input } from '@angular/core';
import { Doctor } from '../../../domain/doctors';

@Component({
  selector: 'ngx-doctors-table',
  template: `
              <p-table [value]="doctors">
                <ng-template pTemplate="header">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department ID</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-doctor>
                    <tr>
                        <td>{{doctor.id}}</td>
                        <td>{{doctor.firstName}}</td>
                        <td>{{doctor.lastName}}</td>
                        <td>{{doctor.departments[0].id}}</td>
                    </tr>
                </ng-template>
              </p-table>
  `,
})
export class DoctorsTableComponent {

  @Input()
  doctors: Doctor[];

}
