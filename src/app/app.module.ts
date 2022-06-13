import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { ResidentsModule } from './residents/residents.module';
import { EmployeesModule } from './employees/employees.module';
import { BussinessModule } from './bussiness/bussiness.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResidentsModule,
    EventsModule,
    EmployeesModule,
    BussinessModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export class Person {
  private _id: string;
  private _fullName: string;
  private _age: number;
  private _isMale: boolean;
  private _city: string;
  private _imgUrl: string;

  constructor(
    id: string,
    fullName: string,
    age: number,
    isMale: boolean,
    imgUrl: string,
    city: string = 'Hadera'
  ) {
    this._id = this.id = id;
    this._fullName = this.fullName = fullName;
    this._age = this.age = age;
    this._isMale = this.isMale = isMale;
    this._imgUrl = this.imgUrl = imgUrl;
    this._city = this.city = city;
  }

  public get id(): string {
    return this._id;
  }
  public set id(v: string) {
    if (v.length != 8 && v.length != 9) throw RangeError('invalid id');
    this._id = v;
  }

  public get fullName(): string {
    return this._fullName;
  }
  public set fullName(v: string) {
    this._fullName = v;
  }

  public get age(): number {
    return this._age;
  }
  public set age(v: number) {
    if (v < 0 || v > 120) throw RangeError('age need to be between 0 and 120');
    this._age = v;
  }

  public get isMale(): boolean {
    return this._isMale;
  }
  public set isMale(v: boolean) {
    this._isMale = v;
  }

  public get city(): string {
    return this._city;
  }
  public set city(v: string) {
    this._city = v;
  }

  public get imgUrl(): string {
    return this._imgUrl;
  }
  public set imgUrl(v: string) {
    this._imgUrl = v;
  }
}
