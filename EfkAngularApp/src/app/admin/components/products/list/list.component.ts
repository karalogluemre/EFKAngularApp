import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from 'src/app/admin/services/admin/alertify.service';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_products } from 'src/app/contracts/list_products';
import { ProductsService } from 'src/app/services/common/models/products.service';
declare var $: any
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit, AfterViewInit {

  constructor(spinner: NgxSpinnerService, private productService: ProductsService, private alertifyService: AlertifyService) {
    super(spinner)
  }
  ngAfterViewInit(): void {

  }

  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate', "delete", "edit"];

  dataSource: MatTableDataSource<List_products> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts() {
    this.showSpinner(SpinnerType.BallClimbingDot);
    const allProducts: { totalCount: number; products: List_products[] } = await this.productService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5, () => this.hideSpinner(SpinnerType.BallClimbingDot), errorMessage => this.alertifyService.message(errorMessage, {
      dismissOthers: true,
      messageType: MessageType.Error,
      position: Position.TopCenter
    }))
    this.dataSource = new MatTableDataSource<List_products>(allProducts.products);
    this.paginator.length = allProducts.totalCount;
  }
  delete(id, event) {
    const img: HTMLImageElement = event.srcElement;
    $(img.parentElement.parentElement).fadeOut(2000);

  }
  async pageChanged() {
    await this.getProducts();
  }

  async ngOnInit() {
    await this.getProducts();
  }

}

