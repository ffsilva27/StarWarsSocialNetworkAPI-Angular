import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RebeldeService, rebeldeInterface } from './../service/rebelde.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-rebeldes',
  templateUrl: './listagem-rebeldes.component.html',
  styleUrls: ['./listagem-rebeldes.component.scss']
})
export class ListagemRebeldesComponent implements OnInit {

  listaDeRebeldes: any = [];

  constructor(public rebeldeService: RebeldeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.listarRebeldes();
  }

  gerarAvatar(): number{  
    let min = Math.ceil(1);
    let max = Math.floor(6);
    let indice = Math.floor(Math.random() * (max - min)) + min;
    return indice;
  }

  listarRebeldes(){
    this.rebeldeService.listarRebeldes().subscribe(data=>{
      this.listaDeRebeldes = data;
    })
  }

}
