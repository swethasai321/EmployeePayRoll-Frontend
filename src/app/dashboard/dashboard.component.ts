import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../form/Model/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //injected dependencies which is required to render view properly 
  constructor(private router: Router,private service:EmployeeService) { }
  employee: any;


  ngOnInit(): void {
    this.service.getAllEmployee().subscribe((data:any) => {
      this.employee = data.data;
    });
  }


//when an onAddUser function is called, it will naviagte to the form view
  onAddUser() {
    //it will navigate imperatively in your component classes
    this.router.navigate(["form"]);
  }
  deleteById(id: number) {
    console.log(id);  
    this.service.deleteEmployeeById(id).subscribe((data: any)  =>{
    this.ngOnInit();
     this.router.navigate(["dashboard"]);
    });
  }
  updateById(id: number){
      this.router.navigate(['update',id]);
  }
}


