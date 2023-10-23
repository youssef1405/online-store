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
    const newProduct = this.cartItems.find((p) => p.id === product.id);
    if (newProduct) {
      this.cartItems = this.cartItems.map((p) => {
        p.id === newProduct.id ? (p.amount += 1) : p.amount;
        return p;
      });
    } else {
      this.cartItems.push(product);
    }
  }

  removeProduct(product: Product): void {
    this.cartItems = this.cartItems.filter((p) => p.id !== product.id);
  }

  updateCartItems(newAmount: number, product: Product): void {}

  getCartItems(): Product[] {
    return this.cartItems;
  }

  calculateTotalPrice(): number {
    this.totalPrice = 0;
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
