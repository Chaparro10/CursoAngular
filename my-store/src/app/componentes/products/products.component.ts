import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../models/product';
import { StoreService } from '../../servicios/store.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent  {
  total: number = 0;
  totalProducts:number=0;

  constructor(private storeService:StoreService){}



  products: ProductModel[] = [{
    id: 1,
    name: "Product 1",
    image: "https://imgs.search.brave.com/hun5icNmOYKHwbvhyWG4SddhW2Rrg6m6wEmooYKfid8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MDI5NzgwOS9waG90/by9mcmVzaC1wZWVs/ZWQtYmFuYW5hLW9u/LXBpbmstYmFja2dy/b3VuZC13aXRoLWhh/cmQtc2hhZG93cy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RE1pZXgwM1lqb0R5/YTdaUVRHZFpDWFNE/X3h0RnNKM2lGT2tM/ak5zd3pIUT0",
    price: 100
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://imgs.search.brave.com/hun5icNmOYKHwbvhyWG4SddhW2Rrg6m6wEmooYKfid8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MDI5NzgwOS9waG90/by9mcmVzaC1wZWVs/ZWQtYmFuYW5hLW9u/LXBpbmstYmFja2dy/b3VuZC13aXRoLWhh/cmQtc2hhZG93cy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RE1pZXgwM1lqb0R5/YTdaUVRHZFpDWFNE/X3h0RnNKM2lGT2tM/ak5zd3pIUT0",
    price: 100
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://imgs.search.brave.com/hun5icNmOYKHwbvhyWG4SddhW2Rrg6m6wEmooYKfid8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MDI5NzgwOS9waG90/by9mcmVzaC1wZWVs/ZWQtYmFuYW5hLW9u/LXBpbmstYmFja2dy/b3VuZC13aXRoLWhh/cmQtc2hhZG93cy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RE1pZXgwM1lqb0R5/YTdaUVRHZFpDWFNE/X3h0RnNKM2lGT2tM/ak5zd3pIUT0",
    price: 100
  },

  ]


  onAddProduct(product: ProductModel) {
    console.log("Producto agregado ", product)
    this.storeService.addProduct(product);
    this.total=this.storeService.getTotal();
    this.totalProducts=this.storeService.getTotalProducts();
  }

}
