import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsTableComponent } from './events-table/events-table.component';
import { EditEventDetailComponent } from './edit-event-detail/edit-event-detail.component';


@NgModule({
  declarations: [
    EventsTableComponent,
    EditEventDetailComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
