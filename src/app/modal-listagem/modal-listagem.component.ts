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
  counter:number = 0;

  constructor(public rebeldeService: RebeldeService) { }

  ngOnInit(): void {
    
  }

  show(){
    this.showModal = !this.showModal;
    this.counter = 0;
  }
  
  count(event:any){
    if(event.target.className=="count-img-subtract"){
      this.counter--;
    }else if(event.target.className=="count-img-plus"){
      this.counter++;
    }
  }

}
