import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { HospitalsPageComponent } from './hospitals-page.component';
import { HospitalsTableComponent } from './table/table.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    HospitalsPageComponent,
    HospitalsTableComponent,
  ],
})
export class HospitalsPageModule { }
