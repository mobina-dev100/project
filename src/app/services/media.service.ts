import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http:HttpClient) { }

  upload(body: any){
    return this.http.post('http://localhost:8000/api/media',body)
  }


}
