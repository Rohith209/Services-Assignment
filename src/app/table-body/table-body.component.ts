import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  constructor(private sharedUSer: UserService) { }
  employee = {
    Name: "",
    ID: 0,
    Company: "",
    Designation: "",
    Salary: 0
  }

  ngOnInit(): void {
  }
  newName(emp_name) {
    this.employee.Name = emp_name.value;
    this.sharedUSer.setName(this.employee.Name)
    console.log(this.employee.Name);
  }
  newID(emp_id) {
    this.employee.ID = parseInt(emp_id.value);
    this.sharedUSer.setID(this.employee.ID);
    console.log(this.employee.ID);
  }
  newComp(emp_company) {
    this.employee.Company = emp_company.value;
    this.sharedUSer.setCom(this.employee.Company);
    console.log(this.employee.Company);
  }
  newDes(emp_des) {
    this.employee.Designation = emp_des.value;
    this.sharedUSer.setDes(this.employee.Designation)
    console.log(this.employee.Designation);
  }
  newSal(emp_sal) {
    this.employee.Salary = emp_sal.value;
    this.sharedUSer.setSal(this.employee.Salary)
    console.log(this.employee.Salary);
    console.log(this.employee);
  }
}

