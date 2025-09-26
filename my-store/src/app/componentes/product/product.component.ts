import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input('product') product!: ProductModel;
}
