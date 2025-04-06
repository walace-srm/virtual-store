import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  styles: [`
    // .app-content {
    //   padding-top: 64px; /* Altura do mat-toolbar */
    // }
  `],
  template: `
    <app-header></app-header>
    <div class="app-content">
      <router-outlet></router-outlet>
    </div>
    `,
  imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'loja virtual';

  constructor(private authService: AuthService, private router: Router) { }
}
