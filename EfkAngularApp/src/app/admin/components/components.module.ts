import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrdersModule } from './orders/orders.module';


@NgModule({
  imports: [
    CommonModule,
    CustomersModule,
    ProductsModule,
    DashboardModule,
    OrdersModule,

  ],
  declarations: [ComponentsComponent]
})
export class ComponentsModule { }
