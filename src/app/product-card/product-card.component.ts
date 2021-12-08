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

  addToCart(): void {
    this.addedToCart.emit(this.productCard);

    // TODO: Figure out why doesn't work:
    // const addButton: HTMLButtonElement = document.querySelector('.add-to-cart');

    // addButton.classList.add('added');
    // addButton.innerHTML = 'In Cart';
  }
}
