import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { PagesRoutingModule } from './pages-routing.module';
import { StarterComponent } from './starter/starter.component';


@NgModule({
  declarations: [
    StarterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
