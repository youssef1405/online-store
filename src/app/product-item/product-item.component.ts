import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() addToCartEvent: EventEmitter<Product> = new EventEmitter();
  amount: number = 1;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 1,
    };
  }

  addToCart(product: Product): void {
    product.amount = this.amount;
    this.addToCartEvent.emit(product);
    alert(
      `You have added ${product.amount} ${product.name} to the cart\nPress OK to confirm`
    );
  }

  setAmount(amount: string): void {
    this.amount = Number(amount);
  }
}
