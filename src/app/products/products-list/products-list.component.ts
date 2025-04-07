import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Product } from '../product';
import { CartService } from './../../cart/cart.service';
import { ProductService } from 'src/app/services/products/producs.service';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, CommonModule]
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  private auth = inject(Auth);
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  products: any;
  loading = signal(false);

  ngOnInit(): void {
    this.getAll();
    // onAuthStateChanged(this.auth, user => {
    //   if (user) {
    //     this.getAll();
    //   }
    // });
  }

  ngAfterViewInit(): void {
    //this.getAll();
  }

  getAll() {
    this.loading.set(true);
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.loading.set(false);
    });
  }
  
  addProductToCart(product: Product): void {
    this.cartService.addProduct(product);
  }

  trackByProduct(index: number, product: Product) {
    return product.id;
  }
}
