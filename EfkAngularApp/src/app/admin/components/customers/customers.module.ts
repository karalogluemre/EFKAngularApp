import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:CustomersComponent}
    ])
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
