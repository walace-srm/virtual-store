import { Injectable, inject, signal, computed } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  user as authUser,
  createUserWithEmailAndPassword,
  updateProfile
} from '@angular/fire/auth';
import { from } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  private cartService = inject(CartService);

  // Observable -> Signal
  user$ = authUser(this.auth);
  user = toSignal(this.user$, { initialValue: null });

  // Computed com nome do usuário
  displayName = computed(() => this.user()?.displayName || 'Usuário');

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    signOut(this.auth).then(() => {
      this.cartService.clearLocalCart(); // 👈 limpa apenas o estado local
      this.router.navigate(['/login']);
    });
  }

  register(email: string, password: string, name: string) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password).then(cred => {
        if (cred.user) {
          return updateProfile(cred.user, { displayName: name });
        } else {
          return Promise.resolve();
        }
      })
    );
  }
  
}
