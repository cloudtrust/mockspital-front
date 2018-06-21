import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FilesPageComponent } from './files-page.component';
import { FilesTableComponent } from './table/table.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    FilesPageComponent,
    FilesTableComponent,
  ],
})
export class FilesPageModule { }
