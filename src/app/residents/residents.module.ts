import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { EditResidentDetailComponent } from './edit-resident-detail/edit-resident-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResidentsListComponent, EditResidentDetailComponent],
  imports: [CommonModule, ResidentsRoutingModule, FormsModule],
})
export class ResidentsModule {}
