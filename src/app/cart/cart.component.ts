import { Component, OnInit } from '@angular/core';
import { productModel } from '../models/product.model';
import { productService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cardsInCart: productModel[];

  constructor(private productServ: productService) {}

  ngOnInit(): void {
    this.cardsInCart = this.productServ.getArchivedCards();
  }

  deleteFromCart(card: productModel): void {
    this.cardsInCart = this.cardsInCart.filter((item) => {
      return item !== card;
    });
    this.productServ.deleteFromArchive(card);
  }
}
