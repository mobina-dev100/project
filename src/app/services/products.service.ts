import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get('http://localhost:8000/api/products')
  }

  addProduct(body:any){
    return this.http.post('http://localhost:8000/api/products',body)
  }

  removeProduct(id:string | number){
    return this.http.delete('http://localhost:8000/api/products/' + id)
  }
}
