import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BussinessRoutingModule } from './bussiness-routing.module';
import { BussinessListComponent } from './bussiness-list/bussiness-list.component';


@NgModule({
  declarations: [
    BussinessListComponent
  ],
  imports: [
    CommonModule,
    BussinessRoutingModule
  ]
})
export class BussinessModule { }
