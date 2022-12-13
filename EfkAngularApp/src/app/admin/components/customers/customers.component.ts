import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService) {
    // /bir clasdan diğer bir class inheritence olarak alınacaksa super ile alınır.
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallClimbingDot);
  }

}
