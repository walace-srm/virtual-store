import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private auth = inject(Auth);
  private router = inject(Router);

  async canActivate(): Promise<boolean> {
    const user = this.auth.currentUser;

    if (user) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
