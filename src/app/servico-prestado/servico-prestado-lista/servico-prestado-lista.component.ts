import { Component } from '@angular/core';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ServicoPrestadoService } from 'src/app/service/servico-prestado.service';
import { ServicoPrestado } from '../servicoPrestado';
@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent {
  faSearch= faSearch;
  faPlus= faPlus;
  nome: String="";
  mes!: number;
  meses: number[]=[];
  dadosServicoPrestado: any[] = [];
  noFound: boolean= false;
  constructor(private servicoPrestadoService: ServicoPrestadoService ){
    this.meses=[1,2,3,4,5,6,7,8,9,10,11,12]
  }
  
  consultar(){
 this.servicoPrestadoService.consutlarServicoMes(this.nome,this.mes).subscribe((response: any)=>{
    this.dadosServicoPrestado= response;
    this.noFound= false;
    }, errorResponse=>{
      this.noFound= true;
      this.dadosServicoPrestado=[];
    })
  }
}
