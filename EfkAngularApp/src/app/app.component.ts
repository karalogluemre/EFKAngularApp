import { Component } from '@angular/core';
// declare var $:any  == jquery kullanacaksak 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EfkAngularApp';
}
// $(document).ready(()=>{
//   alert("asd");
// })