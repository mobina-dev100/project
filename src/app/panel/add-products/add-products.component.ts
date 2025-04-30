import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-products',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.scss'
})
export class AddProductsComponent {

  form = new FormGroup({
    "name": new FormControl('',[Validators.minLength(5)]),
    "price": new FormControl(),
    "stock": new FormControl()
  })

  constructor(private productService: ProductsService){}


  ngOnInit(){
    this.form.patchValue({name:'کفش مجلسی'})
  }


  addProduct(){
    console.log(this.form.value);

    this.productService.addProduct(this.form.value).subscribe((res:any)=>{
      console.log(res);
      
    })
    
  }
}
