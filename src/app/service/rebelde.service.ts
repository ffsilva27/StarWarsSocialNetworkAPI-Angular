import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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
  url: string = "http://localhost:8080/rebeldes"

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

  listarRebeldes(){
    return this.http.get(this.url);
  }

}
