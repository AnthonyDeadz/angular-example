import { productModel } from '../models/product.model';
import { productList } from '../mock/product.mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class productService {
  getProduct(): productModel[] {
    return productList;
  }

  private archivedCards: productModel[] = [];

  moveToCart(card: productModel): void {
    this.archivedCards.push({ ...card, archived: true });
    // console.log(this.archivedCards.length);
  }

  getArchivedCards(): productModel[] {
    return this.archivedCards;
  }

  deleteFromArchive(card: productModel): void {
    card.archived = false;
    this.archivedCards = this.archivedCards.filter((item) => {
      return item !== card;
    });
  }
}
