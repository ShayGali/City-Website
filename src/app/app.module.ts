import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { ResidentsModule } from './residents/residents.module';
import { EmployeesModule } from './employees/employees.module';
import { BussinessModule } from './bussiness/bussiness.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ResidentsModule, EventsModule, EmployeesModule, BussinessModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
