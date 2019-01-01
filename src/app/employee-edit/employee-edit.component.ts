import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "src/app/service/employee.service";
import { Employee } from 'src/app/employee/employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee;
  constructor(private route:ActivatedRoute, private employeeService:EmployeeService,
    private router:Router, private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params=>{
      const id:number = Number(params.get('id'));
      this.employee = this.employeeService.getEmployee(id);
      if(!this.employee){
        this.router.navigate(['/']);
      }
    });
  }

  saveEmployee():void{
    const result = this.employeeService.updateEmployee(this.employee);
    if(result === true){
      window.alert("Saved Successfully!");
    }
  }

  goBack():void{
    this.location.back();
  }

}
