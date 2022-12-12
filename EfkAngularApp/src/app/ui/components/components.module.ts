import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { BasketsModule } from './baskets/baskets.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    HomeModule,
    BasketsModule
  ],
  declarations: [ComponentsComponent]
})
export class ComponentsModule { }
