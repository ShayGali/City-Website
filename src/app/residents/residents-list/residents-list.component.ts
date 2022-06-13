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

  getResidentById(id: string): Resident | undefined {
    let result: Resident | undefined;
    this.service.getResidentById(id).subscribe((res) => (result = res));
    return result;
  }
}
