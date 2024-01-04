import { Component } from '@angular/core';
import {Cliente} from '../cliente';
import {faSave } from '@fortawesome/free-solid-svg-icons';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {
faSave = faSave; 
cliente: Cliente;
constructor(private service: ClientesService ){
  this.cliente = new Cliente();

}
onSubmit(){
  this.service.salvar(this.cliente).subscribe(response =>{ 
    console.log(response);
  });
}
}
