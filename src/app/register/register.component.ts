import { Component, OnInit } from '@angular/core';
import { Employee } from "src/app/employee/employee.model";
import { EmployeeService } from "src/app/service/employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employee:Employee;
  constructor(private employeeService: EmployeeService, private router:Router) {
    this.employee = new Employee("", "", "");
  }

  ngOnInit() {
  }
  
  registerUser(registerForm):void{
    if(this.employeeService.addEmployee(this.employee)){
      this.router.navigate(['/employees']);
    }
  }

}