import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/service/employee.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private employeeService: EmployeeService ) { }

  ngOnInit() {
  }

  logout(){
    this.employeeService.expireLoggedIn();
  }

}
