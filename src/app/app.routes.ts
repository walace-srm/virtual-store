import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/auth/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./auth/signup/signup.component').then(c => c.SignupComponent)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then(r => r.PRODUCT_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart/cart.component').then(c => c.CartComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout',
    loadComponent: () => import('./cart/checkout/checkout.component').then(c => c.CheckoutComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];
