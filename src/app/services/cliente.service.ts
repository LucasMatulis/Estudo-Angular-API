import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  listarCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/exemplo-cadastro/webapi/cliente')
  }

  inserir(cliente: Cliente): Observable<void>{

    return this.http.post<void>('http://localhost:8080/exemplo-cadastro/webapi/cliente', cliente)

  }

  atualizar(cliente: Cliente): Observable<void>{

    return this.http.put<void>('http://localhost:8080/exemplo-cadastro/webapi/cliente', cliente)

  }

  excluir(id:number): Observable<void>{
    let parametro=new HttpParams();
    parametro= parametro.append('id',id);
    return this.http.delete<void>('http://localhost:8080/exemplo-cadastro/webapi/cliente', {params:parametro})
  }
}

