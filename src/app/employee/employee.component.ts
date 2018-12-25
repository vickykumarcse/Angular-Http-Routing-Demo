import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Employee } from "src/app/employee/employee.model";
import { EmployeeService } from "src/app/service/employee.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:Employee;
  id:number;
  totalEmployee:number;
  constructor(private route:ActivatedRoute, private employeeService:EmployeeService, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params=>{
      this.id = Number(params.get('id'));
      this.totalEmployee = this.employeeService.totalEmplyees();
      this.employee = this.employeeService.getEmployee(this.id);
      if(!this.employee){
        this.router.navigate(['/']);
      }
    });
  }

  goPrevious():void{
    if(this.id > 1){
      this.router.navigate(['employees', this.id-1]);
    }
  }
  
  goNext():void{
    if(this.id < this.totalEmployee){
      this.router.navigate(['employees', this.id+1]);
    }
  }

  allEmployees():void{
    this.router.navigate(['employees']);
  }

          
}
