import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from 'src/app/admin/services/admin/alertify.service';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { ProductsService } from 'src/app/services/common/models/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private productService: ProductsService, private alertify: AlertifyService) {
    super(spinner);
  }

  ngOnInit() {
  }

  create(name: HTMLInputElement, price: HTMLInputElement, stock: HTMLInputElement) {
    this.showSpinner(SpinnerType.BallClimbingDot);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    this.productService.createProduct(create_product, () => {
      this.hideSpinner(SpinnerType.BallClimbingDot);
      this.alertify.message("Ürün başarıyla eklenmiştir.", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      })
    });
  }

}
