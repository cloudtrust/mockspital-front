import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PatientsPageComponent } from './patients-page.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    PatientsPageComponent,
  ],
})
export class PatientsPageModule { }
