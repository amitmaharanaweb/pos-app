import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TablelistComponent } from './tablelist/tablelist.component';
import { CustomerdashboardComponent } from './customerdashboard.component';


@NgModule({
  declarations: [ CustomerdashboardComponent, TablelistComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CustomerdashboardComponent }])
  ]
})

export class CustomerModule { }
