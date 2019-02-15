import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeComponent } from 'src/app/employee/employee.component';
import { EmployeeListComponent } from 'src/app/employee-list/employee-list.component';

import { EmployeeRoutingModule } from 'src/app/employee/employee-routing.module';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { FormatstrPipe } from '../pipe/formatstr.pipe';
import { ZoomDirective } from '../directive/zoom.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeEditComponent,
    FormatstrPipe,
    ZoomDirective
  ]
})
export class EmployeeModule { }
