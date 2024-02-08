import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioRegistro } from '../login/usuarioregistro';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { UsuarioLogar } from '../login/usuariologar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  nomeDoUsuario: String=""; 
  constructor(private http: HttpClient, private router: Router) { }


  salvarUsuario(usuario: UsuarioRegistro): Observable<UsuarioRegistro>{
    localStorage.clear();
    return this.http.post<UsuarioRegistro>(`${API_CONFIG.baseUrlAuth}register`, usuario);
  }

  usuarioLogar(usuarioLogar: UsuarioLogar){
    return this.http.post<String>(`${API_CONFIG.baseUrlAuth}login`, usuarioLogar).subscribe({
      next:(res)=>{
        var respJson = JSON.stringify(res);
        var jwt = JSON.parse(respJson);
        localStorage.setItem("Authorization",jwt.token);
        this.nomeDoUsuario= usuarioLogar.login;
        this.router.navigate(['home']);
      }, error:(error)=>{
        alert("Login ou senha incorreto!");
      }
    });
  }
}
