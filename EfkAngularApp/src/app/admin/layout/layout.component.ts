import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../services/admin/alertify.service';
// declare var alertify: any;
// declare var $: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
    // this.alertify.message("Merhaba", {
    //   messageType: MessageType.Success,
    //   delay : 5,
    //   position : Position.BottomRight
    // });
  }

}
