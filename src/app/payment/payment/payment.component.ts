import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  qrCodeBase64: string | null = null;
  carregando = false;
  erro: string | null = null;
  constructor(private http: HttpClient) {}

  iniciarPagamento() {
    const dados = {
      descricao: 'Produto de teste',
      preco: 100,
      quantidade: 1
    };

    this.http.post<any>('http://localhost:3000/api/pagamento/criar-preferencia', dados)
      .subscribe({
        next: (res) => {
          if (res?.id) {
            window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?preference_id=${res.id}`;
            
          } else {
            console.error('Preferência sem ID');
          }
        },
        error: (err) => {
          console.error('Erro ao criar preferência', err);
        }
      });
  }

  pagarComPix() {
    this.carregando = true;
    this.erro = null;

    const dados = {
      valor: 100,
      descricao: 'Produto de teste via Pix'
    };

    this.http.post<any>('http://localhost:3000/api/pagamento/criar-pagamento-pix', dados)
      .subscribe({
        next: (res) => {
          this.qrCodeBase64 = res.qr_code_base64;
          this.carregando = false;
        },
        error: (err) => {
          console.error('Erro ao criar pagamento Pix', err);
          this.erro = 'Erro ao gerar QR Code. Tente novamente.';
          this.carregando = false;
        }
      });
  }
}
