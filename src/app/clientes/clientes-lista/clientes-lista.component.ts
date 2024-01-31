import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/service/clientes.service';
import { faPlus, faPen, faTrash, faXmark, faCheck} from '@fortawesome/free-solid-svg-icons';
import { Router} from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit{
  faPlus= faPlus;
  faPen = faPen;
  faTrash= faTrash;
  faXmark= faXmark;
  faCheck= faCheck;
clientes: Cliente[]= []; 
clienteSelecionado: Cliente;
mensagemSucesso!: String;
mensagemErro: String[]=[];
avisoDelecao!: boolean;
id: any;
constructor(private clienteService: ClientesService, 
  private router: Router){
    this.clienteSelecionado = new Cliente();
  } 
  ngOnInit(): void {
   this.clienteService.getClientes().subscribe(response=>{
    this.clientes= response;
   });
  }
  novoCadastro(){
    this.router.navigate(['clientes/form']);
  }
  preparoDelecao(cliente: Cliente){
    const modelDiv = document.getElementById('modalDelecao');
    if(modelDiv!=null){
  modelDiv.style.display= 'block';
  this.clienteSelecionado = cliente;
  }
    
  }

  fecharModal(){
    const modelDiv = document.getElementById('modalDelecao');
    if(modelDiv!=null){
  modelDiv.style.display= 'none';
    }
    
  }

  confirmarDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
    this.id = this.clienteSelecionado.id;
    this.clienteService.deletar(this.id).subscribe(response=>{
      cliente= response;
      this.mensagemSucesso = "Deletado com Sucesso!"
      this.avisoDelecao= true;
      this.fecharModal();
      setTimeout(()=>{
        window.location.reload();
      },2500);
    }, errorResponse=>{
      this.mensagemErro  = errorResponse;
      this.avisoDelecao= false;
      this.fecharModal();
    })
  }
}
