import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: ProductsComponent }
    ]),
    MatSidenavModule, MatFormFieldModule,MatInputModule,MatButtonModule
  ],
  declarations: [ProductsComponent, CreateComponent, ListComponent]
})
export class ProductsModule { }
