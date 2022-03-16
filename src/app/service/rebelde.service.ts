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
  url: string = "http://localhost:8080/rebeldes";
  urlTraidor: string = "http://localhost:8080/rebeldes/traidor/";
  urlLogin: string = "http://localhost:8080/login";

  constructor(private http: HttpClient) { }

  user: rebeldeInterface = {
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

  gerarAvatar(): number{  
    let min = Math.ceil(1);
    let max = Math.floor(6);
    let indice = Math.floor(Math.random() * (max - min)) + min;
    return indice;
  }

  cadastrarRebelde(nome:string, idade: number, genero:string, nomeDaGalaxia: string, username:string, senha:string){
    return this.http.post<rebeldeInterface>(this.url, {
      username: username,
      senha: senha,
      nome: nome,
      avatar: "Avatar"+this.gerarAvatar(),
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

  negociar(itemRemetente:string[], itemDestinatario:string[], qtdItemRemetente: number[], qtdItemDestinatario: number[]){
    return this.http.patch(this.url+"/negociar",{
      idRemetente: this.user.id,
      idDestinatario:this.rebelde.id,
      itemRemetente: itemRemetente,
      itemDestinatario: itemDestinatario,
      qtdItemRemetente: qtdItemRemetente,
      qtdItemDestinatario: qtdItemDestinatario
    })
  }
}
