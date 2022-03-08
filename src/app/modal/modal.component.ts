import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  show: boolean = false;
  @Output() teste =  new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.show = !this.show;
    this.testeOutput();
  }

  testeOutput(){
    this.teste.emit(this.show);
  }

}
