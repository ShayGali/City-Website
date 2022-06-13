import { Component, OnInit } from '@angular/core';
import Employee from '../Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css'],
})
export class EmployeesTableComponent implements OnInit {
  employees: Employee[];
  constructor(private service: EmployeesService) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(): void {
    this.service
      .getEmployees()
      .subscribe((employee) => (this.employees = employee));
  }

  getEmployeeById(id: string): Employee {
    let result: Employee;
    this.service.getEmployeeById(id).subscribe((res) => (result = res));
    return result;
  }

  getRowColor(salary: number): string {
    return salary > 3000 ? 'blue' : 'red';
  }
}
