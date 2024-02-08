import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UsuarioRegistro } from './usuarioregistro';
import { RegraUsuario } from './regrausuario';
import { AuthService } from '../service/auth.service';
import { UsuarioLogar } from './usuariologar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

loginError!: boolean;
faEye= faEye;
faEyeSlash= faEyeSlash;
exibeSenha: boolean= false;
cadastrando: boolean= false;
usuario: UsuarioRegistro;
msgAlert: String="";
successSave: boolean= false;
failSave: boolean= false;
usuarioLogar: UsuarioLogar;
constructor(private router: Router, private auth: AuthService){
this.usuario= new UsuarioRegistro();
this.usuarioLogar= new UsuarioLogar(); 
}
  ngOnInit(): void {
    localStorage.clear();
  }

onSubmit(){
  this.usuarioLogar.login= this.usuario.login;
  this.usuarioLogar.password= this.usuario.password;
  this.auth.usuarioLogar(this.usuarioLogar);
  
}

mostrarSenha(){
const passwordLogin= document.querySelector('#password') as HTMLInputElement;
if(passwordLogin && passwordLogin.type==='password'){
  passwordLogin.type='text';
  this.exibeSenha=true;
}
else{
  passwordLogin.type='password';
  this.exibeSenha=false;
  }
}

preparaCadastrar(event: any){
  event.preventDefault(); //evita o evento de ser executado
  this.cadastrando= true;
}
cancelaCadastro(){
  this.cadastrando= false;
}


cadastrar(){
  this.usuario.role = RegraUsuario.user;
  this.auth.salvarUsuario(this.usuario).subscribe(response=>{ 
this.msgAlert="Cadastrado com sucesso!";
this.successSave= true;
this.failSave= false;
this.loginError=false;
setTimeout(()=>{
  window.location.reload();
},2500)
}, errorResponse=>{
  this.failSave= true;
  this.successSave= false;
  this.msgAlert= "Erro ao cadastrar ou/Login já existe!";
  this.loginError=false;

})
}

}
