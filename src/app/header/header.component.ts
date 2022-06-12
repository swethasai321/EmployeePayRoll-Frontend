import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
    }
  onDashboard(){
    this.router.navigate(["dashboard"]);
  }

  onform(){
    this.router.navigate(["form"]);
  }
}