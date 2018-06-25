import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FilesPageComponent } from './files-page.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    FilesPageComponent,
  ],
})
export class FilesPageModule { }
