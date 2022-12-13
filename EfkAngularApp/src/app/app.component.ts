import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './ui/services/customToastr.service';
// declare var $:any  == jquery kullanacaksak 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EfkAngularApp';
  constructor() {
  }
  //   constructor(private toastr: CustomToastrService) {
  //   toastr.message("Merhaba", "Emre", { messageType: ToastrMessageType.Info, position: ToastrPosition.TopCenter });
  // }
}
// $(document).ready(()=>{
//   alert("asd");
// })