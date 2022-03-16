import { RebeldeService } from './../../service/rebelde.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router, public rebeldeService:RebeldeService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(["/login"]);
  }

}
