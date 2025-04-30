import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  data:any
  constructor(private productsService:ProductsService){}


  ngOnInit(){
    this.productsService.getAll().subscribe( (v:any)=>{
      console.log(v);
      this.data = v.data;
    } )
  }


}
