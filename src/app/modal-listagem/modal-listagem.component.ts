import { Event } from '@angular/router';
import { RebeldeService } from './../service/rebelde.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-listagem',
  templateUrl: './modal-listagem.component.html',
  styleUrls: ['./modal-listagem.component.scss']
})
export class ModalListagemComponent implements OnInit {

  showModal:boolean = true;
  counterGunRemet:number = 0;
  counterMunicionRemet:number = 0;
  counterFoodRemet:number = 0;
  counterWaterRemet:number = 0;
  counterGunDest:number = 0;
  counterMunicionDest:number = 0;
  counterFoodDest:number = 0;
  counterWaterDest:number = 0;

  constructor(public rebeldeService: RebeldeService) { }

  ngOnInit(): void {
    
  }

  show(){
    this.showModal = !this.showModal;
    this.counterGunRemet = 0;
    this.counterMunicionRemet = 0;
    this.counterFoodRemet = 0;
    this.counterWaterRemet = 0;
    this.counterGunDest = 0;
    this.counterMunicionDest = 0;
    this.counterFoodDest = 0;
    this.counterWaterDest = 0;
  }
  
  count(event:any){
    switch(event.target.className){
      case "count-remet-subtract-gun":
        this.counterGunRemet--;
        break;
      case "count-remet-plus-gun":
        this.counterGunRemet++;
        break;
      case "count-remet-subtract-municion":
        this.counterMunicionRemet--;
        break;
      case "count-remet-plus-municion":
        this.counterMunicionRemet++;
        break;
  
      case "count-remet-subtract-water":
        this.counterWaterRemet--;
        break;
      case "count-remet-plus-water":
        this.counterWaterRemet++;
        break;
    
      case "count-remet-subtract-food":
        this.counterFoodRemet--;
        break;
      case "count-remet-plus-food":
        this.counterFoodRemet++;
        break;

      case "count-dest-subtract-gun":
        this.counterGunDest--;
        break;
      case "count-dest-plus-gun":
        this.counterGunDest++;
        break;
  
      case "count-dest-subtract-municion":
        this.counterMunicionDest--;
        break;
      case "count-dest-plus-municion":
        this.counterMunicionDest++;
        break;

      case "count-dest-subtract-water":
        this.counterWaterDest--;
        break;
      case "count-dest-plus-water":
        this.counterWaterDest++;
        break;
  
      case "count-dest-subtract-food":
        this.counterFoodDest--;
        break;
      case "count-dest-plus-food":
        this.counterFoodDest++;
        break;
                            
      default:
        break;
    }
  }

}
