import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { HospitalsPageComponent } from './hospitals-page.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    HospitalsPageComponent,
  ],
})
export class HospitalsPageModule { }
