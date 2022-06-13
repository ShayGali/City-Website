import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import EventData from '../EventData';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css'],
})
export class EventsTableComponent implements OnInit {
  events: EventData[] = [];
  constructor(private service: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.service.getEvents().subscribe((events) => (this.events = events));
  }
  getEventByCode(eventCode: number): EventData | undefined {
    let result: EventData | undefined;
    this.service
      .getEventByCode(eventCode)
      .subscribe((event) => (result = event));
    return result;
  }

  getClass(numberOfParticipants: number): string {
    if (numberOfParticipants >= 30 && numberOfParticipants < 100)
      return 'yellow-text';
    else if (numberOfParticipants < 30) return 'red-text';
    else return 'green-text';
  }
}
