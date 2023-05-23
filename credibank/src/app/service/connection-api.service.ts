import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {
  public url_one: string;
  public url_tow: string;
  public url_one_id: string;
  public url_tow_id: string;

  constructor(
    private readonly _http: HttpClient
  ) {
    this.url_one = 'https://api.escuelajs.co/api/v1/products';
    this.url_tow = 'https://fakestoreapi.com/products';
    this.url_one_id = 'https://fakestoreapi.com/products/';
    this.url_tow_id = 'https://api.escuelajs.co/api/v1/products/';
   }
  
  firstApi():Observable<any>{
    return this._http.get<any>(this.url_one);
  };

  secondApi():Observable<any>{
    return this._http.get<any>(this.url_tow);
  };

  firstApiId(id:number):Observable<any>{
    return this._http.get<any>(this.url_tow_id+id);
  };

}
