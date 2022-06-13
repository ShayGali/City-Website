import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Resident from '../Resident';
import { ResidentsService } from '../residents.service';
import { switchMap } from 'rxjs/operators';
import { MaritalStatus } from '../Resident';
@Component({
  selector: 'app-edit-resident-detail',
  templateUrl: './edit-resident-detail.component.html',
  styleUrls: ['./edit-resident-detail.component.css'],
})
export class EditResidentDetailComponent implements OnInit {
  resident: Observable<Resident>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ResidentsService
  ) {}

  ngOnInit(): void {
    this.resident = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getResidentById(params.get('id'))
      )
    );
  }

  goBack() {
    this.router.navigate(['/residents']);
  }
}
