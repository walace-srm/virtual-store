import { Injectable, signal } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { User } from 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class UserService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  user = signal<User | null>(null);
  isAdmin = signal<boolean>(false);

  constructor() {
    onAuthStateChanged(this.auth, async (user) => {
      this.user.set(user);
      if (user) {
        await this.loadUserData(user.uid);
      } else {
        this.isAdmin.set(false);
      }
    });
  }

  private async loadUserData(uid: string) {
    const userRef = doc(this.firestore, 'users', uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      this.isAdmin.set(data['isAdmin'] === true);
    }
  }
}
