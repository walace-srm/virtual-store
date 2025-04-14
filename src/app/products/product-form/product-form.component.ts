import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../product';
import { ProductService } from 'src/app/services/products/producs.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatToolbarModule
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  form: FormGroup;
  categories = ['Blusa', 'Bermuda', 'Calça'];
  sizes = ['P', 'M', 'G', 'GG', '36', '38', '40', '42'];
  colors = ['Preto', 'Branco', 'Azul', 'Vermelho', 'Verde'];
  selectedImage = '';
  allImages: string[] = [];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private productService: ProductService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(1)]],
      category: ['', [Validators.required]],
      size: [''],
      color: [''],
      image: ['', [Validators.required]],
      status: [],
      discount: []
    });

    this.generateImages();
  }

  generateImages() {
    const folders = ['blusas', 'bermudas', 'calcas'];
    for (let folder of folders) {
      for (let i = 1; i <= 5; i++) {
        this.allImages.push(`assets/images/${folder}/${i}.jpg`);
      }
    }
  }

  onImageSelect(imagePath: string) {
    this.selectedImage = imagePath;
    this.form.patchValue({ image: imagePath });
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.snackBar.open('Preencha todos os campos obrigatórios.', 'Fechar', {
        duration: 3000
      });
      return;
    }

    const product: Product = this.form.value;

    try {
      await this.productService.create(product);
      this.snackBar.open('Produto cadastrado com sucesso!', 'Fechar', {
        duration: 3000
      });
      this.form.reset();
      this.selectedImage = '';
    } catch (error) {
      console.error(error);
      this.snackBar.open('Erro ao cadastrar o produto.', 'Fechar', {
        duration: 3000
      });
    }
  }

  onCancel() {
    this.router.navigate(['/products'])
  }
}
