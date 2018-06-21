import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PatientsPageComponent } from './patients-page.component';
import { PatientsTableComponent } from './table/table.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    PatientsPageComponent,
    PatientsTableComponent,
  ],
})
export class PatientsPageModule { }
