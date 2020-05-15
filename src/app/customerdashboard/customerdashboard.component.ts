import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  constructor() {console.log('customer dashboard comp') }

  ngOnInit() {console.log('customer dashboard comp')
  }

}
