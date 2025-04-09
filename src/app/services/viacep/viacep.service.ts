import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

@Injectable({ providedIn: 'root' })

export class ViaCepService {
  private baseUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  buscarEndereco(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.baseUrl}/${cep}/json`);
  }
}
