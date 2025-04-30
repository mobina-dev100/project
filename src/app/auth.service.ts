import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProductsComponent } from './panel/add-products/add-products.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}
  regester(body:any){
    return this.http.post('http://localhost:8000/api/products',body)
  }
}
