import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DoctorsPageComponent } from './doctors-page.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    DoctorsPageComponent,
  ],
})
export class DoctorsPageModule { }
