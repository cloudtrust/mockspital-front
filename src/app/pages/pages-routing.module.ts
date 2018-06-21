import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HospitalsPageComponent } from './hospitals-page/hospitals-page.component';
import { DepartmentsPageComponent } from './departments-page/departments-page.component';
import { DoctorsPageComponent } from './doctors-page/doctors-page.component';
import { PatientsPageComponent } from './patients-page/patients-page.component';
import { FilesPageComponent } from './files-page/files-page.component';

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
      component: HospitalsPageComponent,
    },
    {
      path: 'departments',
      component: DepartmentsPageComponent,
    },
    {
      path: 'doctors',
      component: DoctorsPageComponent,
    },
    {
      path: 'patients',
      component: PatientsPageComponent,
    },
    {
      path: 'files',
      component: FilesPageComponent,
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
