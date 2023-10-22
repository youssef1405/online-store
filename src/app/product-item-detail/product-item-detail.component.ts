import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  productId: number = 1;
  product: Product;
  amount: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 1,
    };
  }

  ngOnInit(): void {
    //this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe((products) => {
      this.activatedRoute.paramMap.subscribe((param) => {
        this.productId = Number(param.get('id'));
      });

      let product = products.find((p) => p.id === this.productId);
      if (product) {
        this.product = product;
      }
    });
  }

  addToCart(product: Product): void {
    product.amount = this.amount;
    this.cartService.addToCart(product);
  }

  setAmount(amount: string): void {
    this.amount = Number(amount);
  }
}
