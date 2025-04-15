import { Injectable, computed, signal } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from '../products/product';
import { collection, doc, Firestore, setDoc, deleteDoc, collectionData } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private firestore = inject(Firestore);
  private auth = inject(Auth);

  private cartSubscription?: Subscription;

  user = signal<User | null>(null);
  cartItems = signal<CartItem[]>([]);

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.user.set(user);

      // 👉 Cancela escuta antiga
      this.cartSubscription?.unsubscribe();

      if (user) {
        this.loadCartFromFirebase();
      } else {
        this.clearLocalCart();
      }
    });
  }

  private get userId() {
    return this.user()?.uid ?? 'anon';
  }

  private cartCollection() {
    return collection(this.firestore, `carts/${this.userId}/items`);
  }

  private getItemDoc(id: string) {
    return doc(this.firestore, `carts/${this.userId}/items/${id}`);
  }

  loadCartFromFirebase() {
    this.cartSubscription = collectionData(this.cartCollection(), { idField: 'id' }).subscribe((items: any) => {
      this.cartItems.set(items);
    });
  }

  addProduct(product: Product): void {
    const user = this.user();
    if (!user) return;

    const indexFound = this.cartItems().findIndex(p => p.product.id === product.id);
    const item = this.cartItems().find(p => p.product.id === product.id);

    const updatedItem: CartItem = indexFound >= 0
      ? { product, quantity: (item?.quantity || 0) + 1 }
      : { product, quantity: 1 };

    setDoc(this.getItemDoc(product.id), updatedItem);
  }

  updateCartQuantity(cartItem: CartItem): void {
    const user = this.user();
    if (!user) return;

    setDoc(this.getItemDoc(cartItem.product.id), cartItem);
  }

  removeProduct(product: Product): void {
    const user = this.user();
    if (!user) return;

    deleteDoc(this.getItemDoc(product.id));
  }

  clearLocalCart() {
    this.cartItems.set([]);
    this.cartSubscription?.unsubscribe();
  }

  cartCount = computed(() =>
    this.cartItems().reduce((acc, curr) => acc + curr.quantity, 0)
  );

  cartSubTotal = computed(() =>
    this.cartItems().reduce((acc, curr) => acc + curr.quantity * curr.product.price, 0)
  );

  cartTax = computed(() => this.cartSubTotal() * 0.08);
  cartTotal = computed(() => this.cartSubTotal() + this.cartTax());
}
