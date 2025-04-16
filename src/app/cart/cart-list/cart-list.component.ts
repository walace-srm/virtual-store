import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../cart.service';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  imports: [
    MatCardModule,
    CartItemComponent,
    MatIcon,
    RouterLink,
    MatButtonModule
  ]
})
export class CartListComponent {

  private cartService = inject(CartService);
  private location = inject(Location)

  cartItems = this.cartService.cartItems;

  goBack(): void {
    this.location.back();
  }
}
