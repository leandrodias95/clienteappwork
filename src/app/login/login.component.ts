import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

username: String="";
password: String="";
loginError!: boolean;
faEye= faEye;
faEyeSlash= faEyeSlash;
exibeSenha: boolean= false;
cadastrando: boolean= false;

constructor(private router: Router){

}

onSubmit(){
  this.router.navigate(['home']);
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


}
