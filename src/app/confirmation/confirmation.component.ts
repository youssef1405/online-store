import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { User } from '../models/user';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  fullName: string = '';
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.fullName = this.cartService.getCurrentUser().fullName;
    this.totalPrice = this.cartService.calculateTotalPrice();
  }
}
