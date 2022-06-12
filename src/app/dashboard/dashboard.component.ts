import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //injected dependencies which is required to render view properly 
  constructor(private router: Router) { }
  employee: any;


  ngOnInit(): void {

  }

  //when an onAddUser function is called, it will naviagte to the form view
  onAddUser() {
    //it will navigate imperatively in your component classes
    this.router.navigate(["form"]);
  }
}
