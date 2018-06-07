import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { FilesComponent } from './files/files.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'hospitals',
      component: HospitalsComponent,
    },
    {
      path: 'departments',
      component: DepartmentsComponent,
    },
    {
      path: 'doctors',
      component: DoctorsComponent,
    },
    {
      path: 'patients',
      component: PatientsComponent,
    },
    {
      path: 'files',
      component: FilesComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
