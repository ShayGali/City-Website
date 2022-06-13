import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { EditResidentDetailComponent } from './edit-resident-detail/edit-resident-detail.component';

@NgModule({
  declarations: [ResidentsListComponent, EditResidentDetailComponent],
  imports: [CommonModule, ResidentsRoutingModule],
})
export class ResidentsModule {}
