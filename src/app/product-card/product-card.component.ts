import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { productModel } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  flag: boolean = false;
  buttonTitle: string = 'Add to Cart';
  @Input() productCard: productModel;
  @Output() addedToCart: EventEmitter<productModel> =
    new EventEmitter<productModel>();

  addToCart(): void {
    this.addedToCart.emit(this.productCard);

    this.flag = !this.flag;
    if (this.flag) {
      this.buttonTitle = 'In Cart';
    } else {
      this.buttonTitle = 'Add to Cart';
    }
  }
}
