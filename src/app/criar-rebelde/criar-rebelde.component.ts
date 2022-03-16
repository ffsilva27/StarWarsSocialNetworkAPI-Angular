import { RebeldeService, rebeldeInterface } from './../service/rebelde.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '@angular/router';

@Component({
  selector: 'app-criar-rebelde',
  templateUrl: './criar-rebelde.component.html',
  styleUrls: ['./criar-rebelde.component.scss']
})
export class CriarRebeldeComponent implements OnInit {

  dropDownLabel: boolean = false;
  father: FormGroup;
  showSomething:boolean = false;
  teste:boolean = false;

  retornoCadastro: rebeldeInterface = {
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

  constructor(private fb: FormBuilder, private rebeldeService: RebeldeService) {
    this.father = fb.group({
      username:["", Validators.required],
      senha:["", Validators.required],
      nome: ["", Validators.required],
      idade: ["", Validators.required],
      genero: ["", Validators.required],
      nomeDaGalaxia: ["", Validators.required]
    })
  }


  ngOnInit(): void {
  }

  criar(){
    this.rebeldeService.cadastrarRebelde(this.father.get(['nome'])?.value, this.father.get(['idade'])?.value, this.father.get(['genero'])?.value, this.father.get(['nomeDaGalaxia'])?.value, this.father.get(['username'])?.value, this.father.get(['senha'])?.value).subscribe(data => {
      this.retornoCadastro = data;
      console.log(data);
      console.log(this.retornoCadastro);
      this.father.setValue({nome:"", idade:"", genero:"", nomeDaGalaxia:"", username:"", senha:""});
    })
  }

  testeOutput2(value: boolean){
    this.showSomething = value;
  }

  stateChange(event: any){
    event.target.value !== "" ? this.dropDownLabel = true : this.dropDownLabel = false;
  }
}
