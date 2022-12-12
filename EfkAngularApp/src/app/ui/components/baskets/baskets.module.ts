import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsComponent } from './baskets.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:BasketsComponent}
    ])
  ],
  declarations: [BasketsComponent]
})
export class BasketsModule { }
