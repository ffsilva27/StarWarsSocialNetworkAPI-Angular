import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RebeldeService, rebeldeInterface } from './../service/rebelde.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listagem-rebeldes',
  templateUrl: './listagem-rebeldes.component.html',
  styleUrls: ['./listagem-rebeldes.component.scss']
})
export class ListagemRebeldesComponent implements OnInit {

  listaDeRebeldes: any = [];
  teste: any;

  constructor(public rebeldeService: RebeldeService, private http: HttpClient, private matSnack: MatSnackBar) { }

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
      for( var i = 0; i < this.listaDeRebeldes.length; i++){ 
        if ( this.listaDeRebeldes[i].id === this.rebeldeService.user.id) { 
          this.listaDeRebeldes.splice(i, 1); 
        }
      }
    })
  }

  relatarTraidor(id:string){
    this.rebeldeService.relatarTraidor(id).subscribe(() => {
      this.ngOnInit()  
    });
    this.matSnack.open("Traidor reportdado com sucesso!", "Sucesso", {duration:1500});
    return false
  }

  testeOutput2(value: boolean){
    this.ngOnInit()
  }

}
