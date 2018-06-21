import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

import { DepartmentsPageModule } from './departments-page/departments-page.module';
import { DoctorsPageModule } from './doctors-page/doctors-page.module';
import { FilesPageModule } from './files-page/files-page.module';
import { HospitalsPageModule } from './hospitals-page/hospitals-page.module';
import { PatientsPageModule } from './patients-page/patients-page.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    DepartmentsPageModule,
    DoctorsPageModule,
    FilesPageModule,
    HospitalsPageModule,
    PatientsPageModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
