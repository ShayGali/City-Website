import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsListComponent } from './residents-list/residents-list.component';


@NgModule({
  declarations: [
    ResidentsListComponent
  ],
  imports: [
    CommonModule,
    ResidentsRoutingModule
  ]
})
export class ResidentsModule { }
