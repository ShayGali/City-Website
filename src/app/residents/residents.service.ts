import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { RESIDENTS } from './dummy-data';
import Resident from './Resident';

@Injectable({
  providedIn: 'root',
})
export class ResidentsService {
  constructor() {}

  getResidents(): Observable<Resident[]> {
    return of(RESIDENTS);
  }
  getResidentById(id: string): Observable<Resident> {
    return this.getResidents().pipe(
      map((residents: Resident[]) => residents.find((r) => r.id === id))
    );
  }
}
