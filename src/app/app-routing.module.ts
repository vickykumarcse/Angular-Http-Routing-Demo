import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from "src/app/login/loginGuard";

const routes:Routes = [
    {path: 'login', component:LoginComponent, canActivate:[LoginGuard]},
    {path: 'register', component:RegisterComponent},
    {path: 'about', component:AboutComponent},
    {path:'employees', loadChildren: './employee/employee.module#EmployeeModule'},
    {path: '', redirectTo:'login', pathMatch: 'full'},
    {path: '**', redirectTo:''}
  ]

@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent,
        AboutComponent
    ],
    imports:[
        FormsModule,
        RouterModule.forRoot(routes, {
            paramsInheritanceStrategy: 'always'
        })
    ],
    exports: [RouterModule],
    providers:[LoginGuard]
})

export class AppRoutingModule{

}