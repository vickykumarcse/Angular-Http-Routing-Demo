import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/service/employee.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit() {
   
  }

  login(loginForm):void{
    if(this.employeeService.authenticateEmployee(loginForm.value.username, loginForm.value.password)){
      this.router.navigate(['/employees']); 
    }
    else{
      alert("Invalid Username or Password!");
    }
  }

}
