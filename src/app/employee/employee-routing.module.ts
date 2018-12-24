import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from "src/app/employee-list/employee-list.component";
import { EmployeeComponent } from "src/app/employee/employee.component";
import { EmployeeGuard } from "src/app/employee/employeeGuard";
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';

const employeeRoutes: Routes = [
  {
    path: '', canActivate:[EmployeeGuard],
    children:  [
       {
         path: ':id',
         children:[
                {
                    path: 'edit', component: EmployeeEditComponent
                },
                {
                    path: '', component: EmployeeComponent
                }
            ]
      },
      {
          path:'', component:EmployeeListComponent
      }
    ]
  }
]

@NgModule({
    imports:[
        RouterModule.forChild(employeeRoutes)
    ],
    exports: [RouterModule],
    providers:[EmployeeGuard]
})

export class EmployeeRoutingModule{

}