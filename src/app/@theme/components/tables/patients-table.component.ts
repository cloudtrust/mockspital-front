import { Component, Input } from '@angular/core';
import { Patient } from '../../../domain/patients';

@Component({
  selector: 'ngx-patients-table',
  template: `
              <p-table [value]="patients">
                <ng-template pTemplate="header">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birthdate</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-patient>
                    <tr>
                        <td>{{patient.id}}</td>
                        <td>{{patient.firstName}}</td>
                        <td>{{patient.lastName}}</td>
                        <td>{{patient.birthDate.substring(0, 10)}}</td>
                    </tr>
                </ng-template>
              </p-table>
  `,
})
export class PatientsTableComponent {

  @Input()
  patients: Patient[];

}
