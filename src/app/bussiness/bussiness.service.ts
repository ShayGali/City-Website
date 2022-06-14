import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BUSINESSES } from './dummy-data';
import Bussiness from './Bussiness';
@Injectable({
  providedIn: 'root',
})
export class BussinessService {
  constructor() {}

  getBusinesses(): Observable<Bussiness[]> {
    return of(BUSINESSES);
  }
  getBussiness(bussinessNumber: number): Observable<Bussiness | undefined> {
    return this.getBusinesses().pipe(
      map((residents: Bussiness[]) =>
        residents.find((e) => e.bussinessNumber === bussinessNumber)
      )
    );
  }
}
