import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { AuthService } from './services/auth/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  styles: [`
  .sidenav-container {
    height: 100vh;
  }

  .sidenav {
    width: 250px;
    background-color: #fafafa; // cor de fundo clara
    padding-top: 16px;
    ::ng-deep .mat-list-item {
      border-radius: 8px;
      margin: 4px 8px;
      padding: 12px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #e0e0e0;
      }
      .mat-icon {
        margin-right: 8px;
      }
    }
  }

  `],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer mode="over" [opened]="false" class="sidenav" (closedStart)="onClose()">
        <mat-nav-list>
          <a mat-list-item (click)="drawer.close()" routerLink="/products">Início</a>
          <a mat-list-item (click)="drawer.close()" routerLink="/products">Produtos</a>
        </mat-nav-list>
      </mat-sidenav>
        <mat-sidenav-content>
          <app-header (menuClick)="drawer.toggle()"></app-header>
          <router-outlet></router-outlet>
        </mat-sidenav-content>
    </mat-sidenav-container>
    `,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MatSidenavModule,
    MatListModule,
    RouterLink
   ]
})
export class AppComponent {
  title = 'loja virtual';
  @ViewChild('drawer') drawer!: MatSidenav;
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private authService: AuthService,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  get isHandset(): boolean {
    return this.mobileQuery.matches;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  onMenuItemClick(): void {
    if (this.isHandset) {
      this.drawer.close();
    }
  }

  onClose(): void {
    // evento quando drawer começa a fechar (se quiser algo visual)
  }
}
