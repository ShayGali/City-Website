import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventService } from '../event.service';
import EventData from '../EventData';

@Component({
  selector: 'app-edit-event-detail',
  templateUrl: './edit-event-detail.component.html',
  styleUrls: ['./edit-event-detail.component.css'],
})
export class EditEventDetailComponent implements OnInit {
  event: Observable<EventData>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EventService
  ) {}

  ngOnInit(): void {
    this.event = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEventByCode(+params.get('id'))
      )
    );
  }

  goBack() {
    this.router.navigate(['/events']);
  }
}
