import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../models/product';
import { StoreService } from '../../servicios/store.service';
import { ProductsService } from '../../servicios/products.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit  {
  total: number = 0;
  totalProducts:number=0;

  constructor(private storeService:StoreService, private productsService:ProductsService){}


  ngOnInit(): void {
      this.getAllProducts();
  }

  products: ProductModel[] = []


  onAddProduct(product: ProductModel) {
    console.log("Producto agregado ", product)
    this.storeService.addProduct(product);
    this.total=this.storeService.getTotal();
    this.totalProducts=this.storeService.getTotalProducts();
  }


  async getAllProducts(){
     this.productsService.getAllProducts().subscribe({
    next: (data) => {  
      console.log('====products=====', data)
          this.products = data;
    },
    error: (err) => console.error(err),
  });
  }

}
