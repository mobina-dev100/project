import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  data:any[] =[]
  constructor(private productService:ProductsService, private toastr: ToastrService){}

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.productService.getAll().subscribe({
      next:(res:any)=>{
        this.data = res.data
      },
      error:()=>{

      }
    })
  }

  remove(id:number){
    this.productService.removeProduct(id).subscribe({
      next:(res:any)=>{
        this.toastr.success('حذف شد')
        this.getData()
      },
      error:()=>{

      }
    })
  }

}
