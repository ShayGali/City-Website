import { Component, OnInit } from '@angular/core';
import Resident from '../Resident';
import { ResidentsService } from '../residents.service';

@Component({
  selector: 'app-residents-list',
  templateUrl: './residents-list.component.html',
  styleUrls: ['./residents-list.component.css'],
})
export class ResidentsListComponent implements OnInit {
  residents: Resident[] = [];

  constructor(private service: ResidentsService) {}

  ngOnInit(): void {
    this.getResidents();
  }

  getResidents(): void {
    this.service.getResidents().subscribe((res) => (this.residents = res));
  }

  getResidentsById() {
    let result;
    this.service
      .getResidentById('123485678')
      .subscribe((res) => (result = res));
    console.log(result);
  }
}
