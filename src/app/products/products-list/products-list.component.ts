import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Product } from '../product';
import { CartService } from './../../cart/cart.service';
import { ProductService } from 'src/app/services/products/producs.service';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { SearchService } from 'src/app/services/search/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, CommonModule]
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private searchService = inject(SearchService);
  private route = inject(ActivatedRoute);
  private changeDetector = inject(ChangeDetectorRef);

  products: any;
  produtosFiltrados: Product[] = [];
  loading = signal(false);

  ngOnInit(): void {
    this.listenSearch();
    this.filterProductByCategory();
  }

  ngAfterViewInit(): void {
  }

  getAll() {
    this.loading.set(true);
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.produtosFiltrados = products;
      this.loading.set(false);
    });
  }

  listenSearch() {
    this.searchService.searchTerm$.subscribe(term => {
      const texto = term.toLowerCase().trim();
  
      if (this.products) {
        this.produtosFiltrados = this.products.filter((p: any) =>
          p.name.toLowerCase().includes(texto)
        );
      }
    });
  }
  
  
  addProductToCart(product: Product): void {
    this.cartService.addProduct(product);
  }

  filterProductByCategory() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.loadProductsByCategory(category);
      } else {
        this.getAll();
      }
    });
  }

  loadProductsByCategory(category: string) {
    this.productService.getProductsByCategory(category).subscribe((products) => {
      this.products = products;
      this.produtosFiltrados = products;
      this.loading.set(false);
      this.changeDetector.detectChanges();
    });
  }

  trackByProduct(index: number, product: Product) {
    return product.id;
  }
}
