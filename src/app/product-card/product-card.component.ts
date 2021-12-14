import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { productModel } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() productCard: productModel;
  @Output() addedToCart: EventEmitter<productModel> =
    new EventEmitter<productModel>();

  IsProductInCart: boolean = false;
  buttonTitle: string = 'Add to Cart';

  addToCart(): void {
    this.addedToCart.emit(this.productCard);

    this.IsProductInCart = !this.IsProductInCart;
    if (this.IsProductInCart) {
      this.buttonTitle = 'In Cart';
    } else {
      this.buttonTitle = 'Add to Cart';
    }
  }
}
