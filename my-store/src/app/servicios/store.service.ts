import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private myShoppingCart:ProductModel[]=[];
  private total:number=0;

    constructor() { }

  addProduct(product:ProductModel){
    this.myShoppingCart.push(product);
  }

  getTotal():number{
   return this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

  getTotalProducts():number{
    return this.myShoppingCart.length;
  }

}
