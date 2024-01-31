import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Cliente} from '../cliente';
import {faSave, faArrowAltCircleLeft, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { ClientesService } from 'src/app/service/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
faSave = faSave; 
faArrowAltCircleLeft= faArrowAltCircleLeft;
faArrowsRotate = faArrowsRotate;
cliente: Cliente;
success: boolean =  false; 
errors: String[] =[];
id!: number; 
constructor(private service: ClientesService, 
  private router: Router,
  private activatedRoute: ActivatedRoute ){
  this.cliente = new Cliente();

}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    if (params && params['id']) {
      this.id = params['id'];
      this.service.getClientesById(this.id).subscribe(
        response => {
          this.cliente = response;
        },
        errorResponse => {
          this.cliente = new Cliente();
        }
      );
    }
  });
}
onSubmit(){
  if(this.id){
this.service.atualizar(this.cliente).subscribe(response=>{
  this.success= true;
  this.errors=[];
}, errorResponse=>{
  this.errors = ['Error ao atualizar o cliente'];
  this.success= false;
});
  } else{
    this.service.salvar(this.cliente).subscribe(response =>{ 
      this.success= true;
        this.errors=[];
       this.cliente= response;
    }, errorResponse =>{
      this.errors= errorResponse.error.errors;
      this.success= false;
    } );
  }

}
voltar(){
this.router.navigate(['/clientes/lista']);
}

}
