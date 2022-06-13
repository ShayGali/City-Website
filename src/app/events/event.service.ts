import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { EVENTS } from './dummy-data';
import EventData from './EventData';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  getEvents(): Observable<EventData[]> {
    return of(EVENTS);
  }
  getEventByCode(eventCode: number): Observable<EventData | undefined> {
    return this.getEvents().pipe(
      map((residents: EventData[]) =>
        residents.find((e) => e.eventCode === eventCode)
      )
    );
  }
}
