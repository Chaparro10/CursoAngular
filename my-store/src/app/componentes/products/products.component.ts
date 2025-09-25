import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

   @Input('product') product!: ProductModel;

}
