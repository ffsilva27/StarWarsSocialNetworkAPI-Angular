import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { rebeldeInterface, RebeldeService } from '../service/rebelde.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  loginError: boolean = false;
  group: FormGroup;
  retornoLogin: rebeldeInterface = {
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

  constructor(private fb: FormBuilder, private rebeldeService: RebeldeService, private router: Router) { 
    this.group = fb.group({
      username: ["", Validators.required],
      senha: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.rebeldeService.login(this.group.get(['username'])?.value, this.group.get(['senha'])?.value).subscribe(data => {
      if(data.id){
        this.retornoLogin = data;
        console.log(data)
        localStorage.setItem('user', this.retornoLogin.id);
        this.router.navigate(['main'])
      } else {
        this.loginError = true;
      }
      this.group.setValue({username:"", senha:""});
    })
    
  }

}
