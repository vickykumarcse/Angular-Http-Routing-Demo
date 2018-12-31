
import { CanDeactivate } from "@angular/router";
import { DialogService } from "src/app/service/dialog.service";
import { Observable } from "rxjs";
import { EmployeeEditComponent } from "src/app/employee-edit/employee-edit.component";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { EmployeeService } from "src/app/service/employee.service";
import { UtilService } from "src/app/service/util.service";

@Injectable()
export class EmployeeEditGuard implements CanDeactivate<EmployeeEditComponent>{
    constructor(private dialogService: DialogService, private employeeService:EmployeeService, private utilService: UtilService){

    }
    canDeactivate(component: EmployeeEditComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean{
        const newEmployee = component.employee;
        const oldEmployee = this.employeeService.getEmployee(newEmployee.id);
        if(this.utilService.comparePlainObject(newEmployee, oldEmployee)){
            return true;
        }
        else{
            return this.dialogService.confirm("Do you want to discard the changes?");
        }
    }
}