import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "src/app/service/employee.service";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  constructor(private route:ActivatedRoute, private employeeService:EmployeeService,private location: Location) { }

  ngOnInit() {
    
  }

  saveEmployee():void{

  }

  goBack():void{
    this.location.back();
  }

}
