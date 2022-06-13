import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessListComponent } from './bussiness-list/bussiness-list.component';

const routes: Routes = [
  { path: 'bussiness', component: BussinessListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BussinessRoutingModule {}
