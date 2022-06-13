import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditResidentDetailComponent } from './edit-resident-detail/edit-resident-detail.component';
import { ResidentsListComponent } from './residents-list/residents-list.component';

const routes: Routes = [
  { path: 'residents', component: ResidentsListComponent },
  { path: 'residents/:id', component: EditResidentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentsRoutingModule {}
