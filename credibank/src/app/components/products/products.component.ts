import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConnectionApiService } from 'src/app/service/connection-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  @ViewChild('message', {static: false}) message!: ElementRef;
  public data:Array<any>;
  public categorys:Array<any>;
  public ids: Array<string>;

  constructor(
    private _connectionApiService: ConnectionApiService
  ){
    this.data = [];
    this.categorys = [];
    this.ids = [];
  };

  ngOnInit(): void {
    this.firstConection();
    this.secondConection();
    console.log(this.data)
  };

  firstConection(){
    this._connectionApiService.firstApi().subscribe({
      next: (response)=>{
        for (let i = 0; i < response.length; i++) {
          this.data.push(response[i]);
          this.categorys.push(response[i].category.name)
        };
      },
      error: (error)=>{
        console.log("linea 25", error)
      }
    })
  };

  secondConection(){
    this._connectionApiService.secondApi().subscribe({
      next: (response)=>{
        for (let i = 0; i < response.length; i++) {
          this.data.push(response[i]);
        };
      }, 
      error: (error)=>{
        console.log('línea 36', error)
      }
    });
  };

  show_hide(cart:any){
    cart.classList.toggle('hide');
  };

  save_product(id:string){
    if (localStorage.getItem('id')) {
      this.ids = JSON.parse(localStorage.getItem('id')!);
      this.ids.push(id);
      localStorage.setItem('id', JSON.stringify(this.ids));
      location.reload();
    }else{
      this.ids.push(id);
      localStorage.setItem('id', JSON.stringify(this.ids));
      location.reload()
    }
    
  }
}
