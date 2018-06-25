import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DepartmentsPageComponent } from './departments-page.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    DepartmentsPageComponent,
  ],
})
export class DepartmentsPageModule { }
