import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from '../servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  constructor(
    private http: HttpClient
  ) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(`${API_CONFIG.baseUrl}servico-prestado/insert`, servicoPrestado);
    
  }

  consutlarServicoMes(nome: String, mes: number): Observable<ServicoPrestado>{
    const params = new HttpParams().set('nome', nome.toString()).set('mes', mes.toString());
    return this.http.get<ServicoPrestado>(`${API_CONFIG.baseUrl}servico-prestado`,{params});
  }
}
