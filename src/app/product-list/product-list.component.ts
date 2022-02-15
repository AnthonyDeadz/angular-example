import { Component, OnInit } from '@angular/core';
import { productModel } from '../models/product.model';
import { productService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: productModel[];

  constructor(private productServ: productService) {}

  ngOnInit(): void {
    this.productList = this.productServ.getProduct();
  }

  addToCart(card: productModel): void {   

    const archivedCard = this.productList.find((findCard: productModel) => {
      return findCard === card;
    });
    if (archivedCard) {
      this.productServ.moveToCart(archivedCard);
      // console.log('The card has been archived!');
    }

    console.log(`The card with id ${card.id} has been added to the cart`);
  }
}
