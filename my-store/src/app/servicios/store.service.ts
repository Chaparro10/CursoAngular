import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';
import {BehaviorSubject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private myShoppingCart:ProductModel[]=[];
  private total:number=0;

  private myCart= new BehaviorSubject<ProductModel[]>([]);
  myCart$=this.myCart.asObservable();


    constructor() { }

  addProduct(product:ProductModel){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getTotal():number{
   return this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

  getTotalProducts():number{
    return this.myShoppingCart.length;
  }

}
