import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import { CartService } from './../../cart/cart.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgIf } from '@angular/common';
import { UserService } from 'src/app/services/user/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink
  ]
})
export class HeaderComponent implements OnInit {
  @Output() menuClick = new EventEmitter<void>();

  private authService = inject(AuthService);
  private cartService = inject(CartService);
  private webPageTitle = inject(Title);
  userService = inject(UserService);

  cartCount = this.cartService.cartCount;
  user = this.authService.user;
  displayName = this.authService.displayName;

  ngOnInit(): void {
    this.webPageTitle.setTitle('Loja virtual');
  }

  logout() {
    this.authService.logout();
  }

  get isAdmin() {
    return this.userService.isAdmin();
  }
  
}
