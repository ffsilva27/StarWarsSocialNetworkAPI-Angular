import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, of } from 'rxjs';


export interface rebeldeInterface {
  id:any,
  nome: string,
  idade: number,
  genero: string,
  traidor: boolean,
  localizacao: {
    latitude: number,
    longitude:number,
    nomeDaGalaxia: string
  },
  avatar: string,
  inventario: {
    items:{
      arma:{
        pontos: number,
        quantidade: number
      },
      municao:{
        pontos: number,
        quantidade: number
      },
      agua:{
        pontos: number,
        quantidade: number
      },
      comida:{
        pontos: number,
        quantidade: number
      }
    }
  }
}

export interface rebeldeRequestInfo {
  nome: string,
  idade:number,
  genero:string,
  localizacao:{
    nomeDaGalaxia:string
  }
}

@Injectable({
  providedIn: 'root'
})

export class RebeldeService {
  userId: string = '';
  url: string = "http://localhost:8080/rebeldes";
  urlTraidor: string = "http://localhost:8080/rebeldes/traidor/";
  urlLogin: string = "http://localhost:8080/login";

  constructor(private http: HttpClient) { }

  rebelde: rebeldeInterface = {
    id: undefined,
    nome: '',
    idade: 0,
    genero: '',
    traidor: false,
    localizacao: {
      latitude: 0,
      longitude: 0,
      nomeDaGalaxia: ''
    },
    avatar: '',
    inventario: {
      items: {
        arma: {
          pontos: 0,
          quantidade: 0
        },
        municao: {
          pontos: 0,
          quantidade: 0
        },
        agua: {
          pontos: 0,
          quantidade: 0
        },
        comida: {
          pontos: 0,
          quantidade: 0
        }
      }
    }
  }

  rebeldeRequest: rebeldeRequestInfo = {
    nome: '',
    idade: 0,
    genero: '',
    localizacao: {
      nomeDaGalaxia: ''
    }
  }

  login(username:string, senha:string){
    return this.http.post<rebeldeInterface>(this.urlLogin,{
      username: username,
      senha: senha
    }).pipe(
      catchError((x)=>{
        console.log(x)
        return of(this.rebelde) 
      }),
    )
  }

  cadastrarRebelde(nome:string, idade: number, genero:string, nomeDaGalaxia: string){
    return this.http.post<rebeldeInterface>(this.url, {
      nome: nome,
      idade: idade,
      genero: genero,
      localizacao:{
        nomeDaGalaxia: nomeDaGalaxia
      }
    });
  }

  getRebelde(id:any){
    return this.http.get<rebeldeInterface>(this.url+"/"+id)
  }

  listarRebeldes(){
    return this.http.get(this.url);
  }

  relatarTraidor(id:string){
    return this.http.patch(this.urlTraidor + id, "");
  }

  
}
