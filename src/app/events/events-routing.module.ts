import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEventDetailComponent } from './edit-event-detail/edit-event-detail.component';
import { EventsTableComponent } from './events-table/events-table.component';

const routes: Routes = [
  { path: 'events', component: EventsTableComponent },
  { path: 'events/:id', component: EditEventDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
