import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Product } from '../product';
import { CartService } from './../../cart/cart.service';
import { ProductService } from 'src/app/services/products/producs.service';
import { SearchService } from 'src/app/services/search/search.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ]
})
export class ProductsListComponent implements OnInit {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private searchService = inject(SearchService);
  private route = inject(ActivatedRoute);
  private changeDetector = inject(ChangeDetectorRef);
  private snackBar = inject(MatSnackBar);

  loading = signal(false);
  products: any;
  produtosFiltrados: Product[] = [];

  ngOnInit(): void {
    this.listenSearch();
    this.filterProductByCategory();
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
    this.snackBar.open(`${product.name} adicionado ao carrinho!`, 'Fechar', { duration: 3000 });
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
