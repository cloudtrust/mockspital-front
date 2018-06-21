import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DoctorsPageComponent } from './doctors-page.component';
import { DoctorsTableComponent } from './table/table.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    DoctorsPageComponent,
    DoctorsTableComponent,
  ],
})
export class DoctorsPageModule { }
