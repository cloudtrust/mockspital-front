import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

import { HospitalsPageComponent } from './hospitals-page/hospitals-page.component';
import { DepartmentsPageComponent } from './departments-page/departments-page.component';
import { DoctorsPageComponent } from './doctors-page/doctors-page.component';
import { PatientsPageComponent } from './patients-page/patients-page.component';
import { FilesPageComponent } from './files-page/files-page.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    HospitalsPageComponent,
    DepartmentsPageComponent,
    DoctorsPageComponent,
    PatientsPageComponent,
    FilesPageComponent,
  ],
})
export class PagesModule {
}
