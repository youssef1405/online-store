import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  productId: number = 1;
  product: Product | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {
    //this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
     this.productService.getProducts().subscribe((products) => {
      this.activatedRoute.paramMap.subscribe((param) => {
        this.productId = Number(param.get('id'));
      });
      this.product = products.find((p) => p.id === this.productId);
    });
  }

  ngOnDestroy(){}
}
