import { Component, OnInit } from '@angular/core';
import Bussiness from '../Bussiness';
import { BussinessService } from '../bussiness.service';

@Component({
  selector: 'app-bussiness-list',
  templateUrl: './bussiness-list.component.html',
  styleUrls: ['./bussiness-list.component.css'],
})
export class BussinessListComponent implements OnInit {
  constructor(private service: BussinessService) {}
  businesses: Bussiness[] = [];
  ngOnInit(): void {
    this.getBusinesses();
  }

  getBusinesses(): void {
    this.service
      .getBusinesses()
      .subscribe((businesses) => (this.businesses = businesses));
  }

  getBussinessByNumber(bussinessNumber: number): Bussiness | undefined {
    let result: Bussiness | undefined;
    this.service
      .getBussiness(bussinessNumber)
      .subscribe((res) => (result = res));
    return result;
  }

  getRowColor(averageProfit: number): string {
    return averageProfit < 5000 ? 'IndianRed' : 'CornflowerBlue';
  }
}
