import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ConnectionApiService } from 'src/app/service/connection-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public data:Array<any>;
  public categorys:Array<any>;
  public clearCategorys: Array<any>;

  constructor(
    private _connectionApiService: ConnectionApiService
  ){ 
    this.data = [];
    this.categorys = [];
    this.clearCategorys = [];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
