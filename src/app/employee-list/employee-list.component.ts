import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/service/employee.service";
import { Employee } from "src/app/employee/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

}
