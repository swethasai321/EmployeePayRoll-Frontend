import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from './Model/employee.Model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
// make parameterized constructor of employee which is our model
  employee: EmployeeModel = new EmployeeModel("","","", "", 0, "", "", "");

  //Getting id from routes snapshot using paramMap for doing update operation
  Id: any = this.route.snapshot.paramMap.get("Id")


  //Injected router to navigate from one component to another component
  //Injected ActivatedRoute to get access to information about route.here it take id as path variable
  constructor(private router: Router,private route: ActivatedRoute) { }

//whenever the component is initialized ngOnInit method is invoked first
  ngOnInit(): void {}

  // navigate user to DashboardComponent
  onCancel() {
    this.router.navigate(["dashboard"]);
  }

  onSubmit() {
    console.log(this.employee);
    }
    getVal(value: String) {
    this.employee.department = value.toString();
  }
}