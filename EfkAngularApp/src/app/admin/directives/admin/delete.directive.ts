import { HttpErrorResponse } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductsService } from 'src/app/services/common/models/products.service';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
declare var $: any
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element: ElementRef,
    private spinner: NgxSpinnerService,
    private _renderer: Renderer2,
    private alertifyService: AlertifyService,
    public dialog: MatDialog,
    private httpClientService: HttpClientService,
    private productService: ProductsService) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../assets/delete.png");
    img.setAttribute("style", "cursor:pointer;");
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);

  }
  @Input() id: string;
  @Input() controller: string;
  @Output() callBack: EventEmitter<any> = new EventEmitter();

  @HostListener("click")  //ilgili nesne tıklanıldığında devreye girecek

  async onclick() {
    this.openDialog(async () => {

      this.spinner.show(SpinnerType.BallClimbingDot);
      const td = HTMLTableCellElement = this.element.nativeElement;
      this.httpClientService.delete({
        controller: this.controller
      }, this.id).subscribe(data => {
        $(td.parentElement).animate({
          opacity: 0,
          left: "+=50",
          height: "toggle"
        }, 700, () => {
          this.callBack.emit();
          this.alertifyService.message("Ürün başarıyla silinmiştir!", {
            dismissOthers: true,
            messageType: MessageType.Success,
            position: Position.TopRight
          })
        });
      }, (errrorResponse: HttpErrorResponse) => {
        this.spinner.hide(SpinnerType.BallClimbingDot);
        this.alertifyService.message("Ürün silinirken hata ile karşılaşıldı!", {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: Position.TopCenter
        });

      });
      // await this.productService.delete(this.id)
    });
  }
  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == DeleteState.Yes) {
        afterClosed();
      }
      // this.animal = result;
    });
  }
}

