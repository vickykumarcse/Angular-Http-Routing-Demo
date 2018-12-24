import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeService } from "src/app/service/employee.service";

@Injectable()
 export class LoginGuard implements CanActivate {
    constructor(private employeeService:EmployeeService, private router:Router){

    }
    canActivate():boolean{
        if(this.employeeService.isLoggedIn()){
            this.router.navigate(['employees']);
            return false;
        }
        return true;
    }
}