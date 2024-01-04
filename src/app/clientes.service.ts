import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {
   }

   salvar(cliente: Cliente):Observable<Cliente>{ //observable coloca um ponto na execução em paralelo fazendo esperar, para só então prosseguir para a próxima linha de código
return this.http.post<Cliente>('http://localhost:8082/servico/api/clientes', cliente);
   }

}
