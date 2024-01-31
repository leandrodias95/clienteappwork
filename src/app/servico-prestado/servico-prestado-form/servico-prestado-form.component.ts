import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/service/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestado } from '../servicoPrestado';
import { faSave,faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { ServicoPrestadoService } from 'src/app/service/servico-prestado.service';
@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit{
  success: boolean = false;
  errors: String[]=[];
faSave = faSave;
faArrowAltCircleLeft=faArrowAltCircleLeft;
  clientes : Cliente[] = [];
  servicoPrestado: ServicoPrestado;

  constructor(private clienteService: ClientesService, private servicoPrestadoService: ServicoPrestadoService){
 this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(response=>{
      this.clientes= response;
    })
  }
  
  onSubmit() {
    this.servicoPrestadoService.salvar(this.servicoPrestado).subscribe(response=>{
      this.servicoPrestado= new ServicoPrestado();
      this.success= true;
      this.errors= [];
    }, errorResponse=>{
      this.success= false;
      this.errors=errorResponse.error.errors;
    });
    }

}
