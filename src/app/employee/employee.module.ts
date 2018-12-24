import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from "src/app/employee-list/employee-list.component";
import { EmployeeComponent } from "src/app/employee/employee.component";
import { EmployeeGuard } from "src/app/employee/employeeGuard";

const routes: Routes = [
  {
    path: 'list', component: EmployeeListComponent, canActivate:[EmployeeGuard]
  },
  {
    path: ':id', component: EmployeeComponent, canActivate:[EmployeeGuard]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeComponent
  ],
  exports: [
    RouterModule
  ],
  providers:[EmployeeGuard]
})
export class EmployeeModule { }
