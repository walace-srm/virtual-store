import { Component, Input, OnInit, inject } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatButtonModule, MatIconModule, CurrencyPipe]
})
export class CartItemComponent implements OnInit {

  @Input({ required: true, alias: 'item' }) cartItem !: CartItem;

  quantityOptions = [1, 2, 3, 4, 5];
  imageSrc!: string;

  private cartService = inject(CartService);

  ngOnInit(): void {
    this.imageSrc = this.cartItem.product.images?.[0] || 'assets/images/placeholder.png';
  }

  onQuantityChange(quantity: number, cartItem: CartItem) {
    cartItem.quantity = quantity;
    this.cartService.updateCartQuantity(cartItem);
  }

  onRemove(): void {
    this.cartService.removeProduct(this.cartItem.product);
  }

  increment(item: CartItem) {
    if (item.quantity < 99) {
      item.quantity++;
      this.onQuantityChange(item.quantity, item);
    }
  }
  
  decrement(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.onQuantityChange(item.quantity, item);
    }
  }

  fallbackImage(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/placeholder.png';
  }
}
