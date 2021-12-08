import { Component } from '@angular/core';
import { productModel } from '../models/product.model';
import { productList } from '../mock/product.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: productModel[] = productList;
}
