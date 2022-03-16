import { Component, OnInit } from '@angular/core';
import { rebeldeInterface, RebeldeService } from 'src/app/service/rebelde.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
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
  avatar: string = '';
  
  constructor(private rebeldeService: RebeldeService) {
    
  }
  
  ngOnInit(): void {
    this.user = this.rebeldeService.user;
    this.avatar = '../../../assets/img/'+ this.user.avatar +'.png';
  }
  
  ngOnChanges(): void{
    this.user = this.rebeldeService.user;
    this.avatar = '../../../assets/img/'+ this.user.avatar +'.png';
  }

}
