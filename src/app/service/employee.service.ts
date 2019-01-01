import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees:Employee[] = [];
  constructor() {
    this.employees = JSON.parse(localStorage.getItem("Employees"));
    if(!this.employees){
      this.employees = [];
    }
  }

  getEmployee(id:number):Employee{
    for(let e of this.employees){
      if(e.id === id){
        return {...e};
      }
    }
    return null;
  }

  getEmployees():Employee[]{
   return [...this.employees];
  }
  
  totalEmplyees():number{
    return this.employees.length;
  }

  private generateId():number{
    return this.employees.length + 1;
  }

  setLoogedIn(){
    sessionStorage.setItem("LoggedIn", "true");
  }

  expireLoggedIn(){
    sessionStorage.removeItem("LoggedIn");
  }

  isLoggedIn():boolean{
    if(sessionStorage.getItem("LoggedIn") === "true"){
      return true;
    }
    return false;
  }

  authenticateEmployee(username:string, password:string):boolean{
    for(let e of this.employees){
      if(e.username === username && e.password === password){
        this.setLoogedIn();
        return true;
      }
    }
    return false;
  }

  updateEmployee(employee: Employee):boolean{
    let index = -1;
    for(let i=0; i < this.employees.length; i++){
      if(this.employees[i].id === employee.id){
        index = i;
        break;
      }
    }
    if(index !== -1){
      this.employees[index] = employee;
    }
    localStorage.setItem("Employees", JSON.stringify(this.employees));
    return true;
  }

  addEmployee(employee: Employee):boolean{
    employee.id = this.generateId();
    this.employees.push(employee);
    localStorage.setItem("Employees", JSON.stringify(this.employees));
    this.setLoogedIn();
    return true;
  }

}
