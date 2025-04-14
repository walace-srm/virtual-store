import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    RouterLink
   ]
})
export class AppComponent {
  title = 'loja virtual';
  @ViewChild('drawer') drawer!: MatSidenav;
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener: () => void;

  categories = [
    { label: 'Blusas', path: 'blusas' },
    { label: 'Calças', path: 'calcas' },
    { label: 'Bermudas', path: 'bermudas' },
    { label: 'Vestidos', path: 'vestidos' },
    { label: 'Acessórios', path: 'acessorios' }
  ];

  constructor(
    private webPageTitle: Title,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.webPageTitle.setTitle('Loja virtual');
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
