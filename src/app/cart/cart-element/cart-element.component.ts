import { Component, Input, Output } from '@angular/core';
import { productModel } from 'src/app/models/product.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.css'],
})
export class CartElementComponent {
  @Input() cartElement: productModel;
  @Output() deletedFromCart: EventEmitter<productModel> =
    new EventEmitter<productModel>();

  deleteFromCart(): void {
    this.deletedFromCart.emit(this.cartElement);
  }

  constructor() {}

  decrease(): void {
    // emit
  }

  increase(): void {
    // emit
  }
}
