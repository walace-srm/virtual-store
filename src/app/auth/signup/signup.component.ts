import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Auth, updateProfile } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: Auth,
    private firestore: Firestore, // 👈 injetando Firestore
    private snackBar: MatSnackBar
  ) {}

  form = this.fb.group({
    nome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  async signup() {
    if (this.form.invalid) return;

    const { nome, email, password } = this.form.value;
    try {
      const cred = await createUserWithEmailAndPassword(this.auth, email!, password!);
      if (cred.user) {
        // Atualiza o nome do usuário no Auth
        await updateProfile(cred.user, { displayName: nome! });

        // 👇 Salva os dados no Firestore com isAdmin: false
        await setDoc(doc(this.firestore, 'users', cred.user.uid), {
          uid: cred.user.uid,
          nome,
          email,
          isAdmin: false
        });
      }

      this.snackBar.open('Usuário cadastrado com sucesso!', 'Fechar', {
        duration: 3000,
        panelClass: 'snack-success'
      });
      this.router.navigate(['/products']);
    } catch (err: any) {
      this.snackBar.open(`Erro: ${err.message}`, 'Fechar', {
        duration: 4000,
        panelClass: 'snack-error'
      });
    }
  }
}
