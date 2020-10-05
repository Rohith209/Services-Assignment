import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  newName="Pritam"
  newID=20
  newComp="TCS"
  newDes="SME"
  newSal=30000

  setName(data) {
    this.newName = data;

  }
  getName() {

    return this.newName;
  }

  setID(data) {
    this.newID = data;

  }
  getID() {
    return this.newID;
  }

  setCom(data) {
    this.newComp = data;

  }
  getCompany() {
    return this.newComp;
  }

  setDes(data) {
    this.newDes = data;

  }
  getDesignation() {
    return this.newDes;
  }

  setSal(data) {
    this.newSal = data;

  }
  getSalary() {
    return this.newSal;
  }
  constructor() { }
}
