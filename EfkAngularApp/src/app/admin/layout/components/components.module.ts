import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomersComponent } from '../../components/customers/customers.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
   
  ],
  declarations: [ComponentsComponent,SidebarComponent,HeaderComponent,FooterComponent],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
