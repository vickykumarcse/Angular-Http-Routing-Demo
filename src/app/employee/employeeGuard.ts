import { CanActivate, Router } from "@angular/router";
import { EmployeeService } from "src/app/service/employee.service";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeGuard implements CanActivate {
    constructor(private employeeService:EmployeeService, private router:Router){

    }
    canActivate():boolean{
        if(!this.employeeService.isLoggedIn()){
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}