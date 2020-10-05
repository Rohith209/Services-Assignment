import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.css']
})
export class TableHeadComponent implements OnInit {

  constructor(private sharedUser : UserService) { }

  ngOnInit(): void {
  }

employees = [
  {
    'Name': "Rohith",
    'ID': 123,
    'Company':"CTS",
    'Designation':"PAT",
    'Salary':30000
  },
  {
    'Name': "Sandhya",
    'ID':234,
    'Company':"CTS",
    'Designation':"PAT",
    'Salary':30000
  },
  {
    'Name': "Sashank",
    'ID': 345,
    'Company':"CTS",
    'Designation':"PAT",
    'Salary':30000
  },
  {
    'Name': "LAkshmi",
    'ID': 456,
    'Company':"CTS",
    'Designation':"PAT",
    'Salary':30000
  },
  {
    'Name': "Sai Ram",
    'ID': 567,
    'Company':"CTS",
    'Designation':"PAT",
    'Salary':30000
  }
];
addEmployee() {
  let newEmployee = 
    {
      Name:"",
      ID:0,
      Company:"",
      Designation:"",
      Salary:0
    }
  newEmployee.Name=this.sharedUser.getName();
  newEmployee.ID=this.sharedUser.getID();
  newEmployee.Company=this.sharedUser.getCompany();
  newEmployee.Designation=this.sharedUser.getDesignation();
  newEmployee.Salary=this.sharedUser.getSalary();
  this.employees.push(newEmployee);
}
}
