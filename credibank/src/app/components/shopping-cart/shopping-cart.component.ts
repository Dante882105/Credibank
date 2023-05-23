import { Component, OnInit } from '@angular/core';
import { ConnectionApiService } from 'src/app/service/connection-api.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  public local_storage: Array<any>;
  constructor(
    private _connectionApiService : ConnectionApiService
  ){
    this.local_storage = [];
  };

  ngOnInit(): void {
    let local = JSON.parse(localStorage.getItem('id')!);
    for (let i = 0; i < local.length; i++) {
      this.getProduct(local[i]);
    }
  };

  getProduct(id:number){
    this._connectionApiService.firstApiId(id).subscribe({
      next: (response)=>{
        this.local_storage.push(response);
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }
}
