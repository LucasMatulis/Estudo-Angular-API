import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes = new Array<Cliente>();

  clienteEdicao?: Cliente=undefined;

  estaEditando=false;

  ngOnInit(): void {
    this.listarClientes()
  }

  constructor(private clientService: ClienteService) { }

  listarClientes():void{
    this.clientService.listarCliente().subscribe(clientes => {
      this.clientes=clientes
    });
  }

  salvar():void{
    if(this.clienteEdicao==undefined){
      return;
    }

    if(!this.estaEditando){
    this.clientService.inserir(this.clienteEdicao).subscribe(()=> {
      this.listarClientes();
      this.cancelar();
    })
  }
  else{
    this.clientService.atualizar(this.clienteEdicao).subscribe(()=> {
      this.listarClientes();
      this.cancelar();
    })
  }
}

  novoCliente(){
    this.clienteEdicao= new Cliente();
    this.estaEditando=false;
  }

  cancelar(){
    this.clienteEdicao=undefined;
    this.estaEditando=false;
  }

  selecionarCliente(cliente:Cliente){
    this.clienteEdicao=cliente;
    this.estaEditando=true;
  }

  excluir(cliente:Cliente){
    const resposta=confirm(`Confirma a exclusão de ${cliente.nome} do ID ${cliente.id}`)

    if(resposta && cliente && cliente.id){
      this.clientService.excluir(cliente.id).subscribe(()=> {
        this.listarClientes();
        this.cancelar();
      })
    }
  }

}
