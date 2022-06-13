import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentsComponent } from './residents/residents.component';
import { EventsComponent } from './events/events.component';
import { EmployeesComponent } from './employees/employees.component';
import { BussinessComponent } from './bussiness/bussiness.component';

@NgModule({
  declarations: [AppComponent, ResidentsComponent, EventsComponent, EmployeesComponent, BussinessComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
