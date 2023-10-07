import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];
  totalPrice: number = 0;
  totalAmount: number = 0;
  currentUser: User = {
    fullName: '',
    address: '',
    creditCardNo: '',
  };

  constructor() {}

  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  calculateTotalPrice(): number {
    for (const item of this.cartItems) {
      this.totalPrice += item.price * item.amount;
    }
    return this.totalPrice;
  }

  getTotalAmount(): number {
    for (const item of this.cartItems) {
      this.totalAmount += item.amount;
    }
    return this.totalAmount;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
}
