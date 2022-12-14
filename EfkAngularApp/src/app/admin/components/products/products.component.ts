import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClient: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallClimbingDot);
    this.httpClient.get<Create_Product[]>({
      controller: "products"
    }).subscribe(data => {
        console.log(data);
    });

    // this.httpClient.post({
    //   controller : "products"
    // },{
    //   name:"Kalem",
    //   stock : 100,
    //   price:15
    // }).subscribe();
    // this.httpClient.put({
    //   controller: "products"
    // }, {
    //   id: "12345",
    //   name: "renkli",
    //   stok: 1500,
    //   price: 10,
    // }).subscribe();

    // this.httpClient.delete({
    //   controller: "products"
    // },
    //   "12345").subscribe();

    // this.httpClient.get({
    //   fullEndPoint : "https://jsonplaceholder.typicode.com/posts"
    // }).subscribe(data=>console.log(data));
  }

}
