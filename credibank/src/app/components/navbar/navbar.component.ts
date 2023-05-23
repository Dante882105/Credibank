import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public number: number;
  constructor(){
    this.number = 0;
  }

  ngOnInit(): void {
    let local = JSON.parse(localStorage.getItem('id')!);
    this.number = local.length;
  };

  


}
