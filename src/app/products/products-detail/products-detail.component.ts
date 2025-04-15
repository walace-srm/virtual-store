import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products/producs.service';
import { Product } from '../product';
import { CartService } from 'src/app/cart/cart.service';
import { CommonModule, Location } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class ProductsDetailComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private snackBar = inject(MatSnackBar);
  private location = inject(Location)

  product: Product | null = null;
  isLoading = true;
  selectedImage: string = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((product) => {
        this.product = product;
        this.isLoading = false;

        // Se a lista de imagens não estiver vazia, escolhe a primeira imagem como padrão
        if (this.product?.images?.length) {
          this.selectedImage = this.product.images[0];
        }
      });
    }
  }

  // Atualiza a imagem selecionada
  selectImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  addToCart() {
    if (this.product) {
      this.cartService.addProduct(this.product);
      this.snackBar.open(`${this.product.name} adicionado ao carrinho!`, 'Fechar', { duration: 3000 });
    }
  }

  goBack(): void {
    this.location.back();
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
