import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {

    /*this.employees=[{

      "id":1,
      "firstname":"Minel",
      "lastname" :"Claire",
      "email":"claire@orange.fr"

    },
    {
      "id":2,
      "firstname":"Clement",
      "lastname" :"Sacha",
      "email":"sacha@orange.fr"

    }
  ]*/

  this.getEmployees()

  }

   getEmployees():void{
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(data);
    });
  }

  updateEmployee(id:number){
    this.router.navigate(['/update-employee',id]);

  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();

    })

  }
  EmployeeDetails(id:number){
    this.router.navigate(['/employee-details',id]);
  }
}
