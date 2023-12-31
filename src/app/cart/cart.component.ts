import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  user: User = {
    fullName: '',
    address: '',
    creditCardNo: '',
  };

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.calculateTotalPrice();
    // this.totalAmount = this.cartService.getTotalAmount();
  }

  submitPayment(): void {
    this.cartService.setCurrentUser(this.user);
    this.router.navigate(['/confirmation']);
  }

  removeItem(product: Product): void {
    alert(
      `Are you sure you want to remove the "${product.name}" item from your cart?\n Click OK to Confirm`
    );
    this.cartService.removeProduct(product);
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.calculateTotalPrice();
  }

  changeCartAmount(amount: number, product: Product): void {
    console.log(amount, product);
  }
}
