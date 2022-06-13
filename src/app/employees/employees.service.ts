import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { EMPLOYEES } from './dummy-data';
import Employee from './Employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor() {}
  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }
  getEmployeeById(id: string): Observable<Employee> {
    return this.getEmployees().pipe(
      map((residents: Employee[]) => residents.find((e) => e.id === id))
    );
  }
}
