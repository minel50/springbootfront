import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id !:number;
  employee:Employee = new Employee();

  constructor(private employeeService : EmployeeService, private route : ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
   this.getEmployee();
  }

  onSubmit(){
    this.saveEmployee();
  }

  getEmployee():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(id).subscribe(data=>{
      this.employee = data;
    })
  }
  saveEmployee():void{

    this.employeeService.updateEmployee(this.employee).subscribe(()=>{
      this.goToEmployeeList();
    },
  error =>console.log(error));

}
goToEmployeeList(){
  this.router.navigate(['/employees']);
}

}
