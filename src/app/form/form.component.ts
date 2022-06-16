import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from './Model/employee.Model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './Model/employee.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
// make parameterized constructor of employee which is our model
  employee: EmployeeModel = new EmployeeModel("","","",0,"","",new Date);

  //Getting id from routes snapshot using paramMap for doing update operation
  id: any = this.route.snapshot.paramMap.get("id")


  //Injected router to navigate from one component to another component
  //Injected ActivatedRoute to get access to information about route.here it take id as path variable
  constructor(private router: Router,private route: ActivatedRoute,private service:EmployeeService) { }

//whenever the component is initialized ngOnInit method is invoked first
  ngOnInit(): void {}

  // navigate user to DashboardComponent
  onCancel() {
    this.router.navigate(["dashboard"]);
  }

  onSubmit() {
    console.log(this.employee);
    this.service.addEmployees(this.employee).subscribe((data:any)=>
    {
      this.router.navigate(["dashboard"])
    })
    }
    getVal(value: String) {
      console.log(value);
    this.employee.department = value.toString();
  }
  getAllEmployeeData(){
    this.service.getAllEmployee().subscribe((data :any)=>{
      console.log("data retrieved successfully");
      this.employee=data;
      this.router.navigate(["dashboard"])
    });
  }
  updateEmployeeById(){
    this.service.updateEmployeeById(this.employee,this.id).subscribe(data => {
      console.log("data updated");
      // this.employee=data;
      this.router.navigate(["dashboard"])
    });
  }
}