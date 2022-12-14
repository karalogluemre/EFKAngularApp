import { Injectable } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private httpClient : HttpClientService) { }
 
createProduct(product : Create_Product, successCallBack? : any){
  this.httpClient.post({
    controller:"products",
  },product)
  .subscribe(result =>{
    successCallBack();
    
  })
 }

}
