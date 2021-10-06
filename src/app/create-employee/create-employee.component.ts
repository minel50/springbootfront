import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  employee:Employee = new Employee();
  constructor(private employeeService:EmployeeService ,private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();

  }

  saveEmployee():void{

    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      this.goToList();
    },
  error =>console.log(error));

}



goToList(){
  this.router.navigate(['/employees']);
}

}
