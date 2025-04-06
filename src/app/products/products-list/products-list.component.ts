import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Product } from '../product';
import { CartService } from './../../cart/cart.service';
import { ProductService } from 'src/app/services/products/producs.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule]
})
export class ProductsListComponent implements OnInit {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  products: any;

  ngOnInit(): void {
    this.getAll();
  }

  addProductToCart(product: Product): void {
    this.cartService.addProduct(product);
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  trackByProduct(index: number, product: Product) {
    return product.id;
  }
}
