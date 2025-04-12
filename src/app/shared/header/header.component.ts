import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators'; // <-- Import necessário

import { CartService } from './../../cart/cart.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { Title } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ]
})
export class HeaderComponent implements OnInit {
  @Output() menuClick = new EventEmitter<void>();

  private authService = inject(AuthService);
  private cartService = inject(CartService);
  private webPageTitle = inject(Title);
  private searchService = inject(SearchService);
  private router = inject(Router);
  userService = inject(UserService);

  searchControl = new FormControl('');

  cartCount = this.cartService.cartCount;
  user = this.authService.user;
  displayName = this.authService.displayName;

  get showSearch(): boolean {
    return this.router.url === '/products';
  }

  ngOnInit(): void {
    this.webPageTitle.setTitle('Loja virtual');

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        const term = value?.trim() ?? '';
        if (term.length >= 2 || term.length === 0) {
          this.searchService.setSearchTerm(term);
        }
      });
  }

  logout() {
    this.authService.logout();
  }

  get isAdmin() {
    return this.userService.isAdmin();
  }
}
