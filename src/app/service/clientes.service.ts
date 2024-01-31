import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {
  }

  salvar(cliente: Cliente): Observable<Cliente> { //observable coloca um ponto na execução em paralelo fazendo esperar, para só então prosseguir para a próxima linha de código
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}clientes/insert`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}clientes`);
  }

  getClientesById(id: number): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.baseUrl}clientes/${id}`);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${API_CONFIG.baseUrl}clientes/${cliente.id}`, cliente);

  }

  deletar(id: number): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.baseUrl}clientes/${id}`);

  }

}
