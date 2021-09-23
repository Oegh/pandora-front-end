import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import {MatExpansionModule} from '@angular/material/expansion'


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PagesRoutingModule,
    SharedModule,
    MatExpansionModule
  ]
})
export class PagesModule { }
