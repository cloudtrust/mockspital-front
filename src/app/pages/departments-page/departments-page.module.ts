import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DepartmentsPageComponent } from './departments-page.component';
import { DepartmentsTableComponent } from './table/table.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    DepartmentsPageComponent,
    DepartmentsTableComponent,
  ],
})
export class DepartmentsPageModule { }
