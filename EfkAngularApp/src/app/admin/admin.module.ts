import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule 
  ],
  declarations: [],
  exports:[
    LayoutModule
  ]
})
export class AdminModule { }
