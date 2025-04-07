import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../cart.service';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

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

  cartItems = this.cartService.cartItems;
}
