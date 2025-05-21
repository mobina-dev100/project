import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { MediaService } from '../../services/media.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-products',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductsComponent implements OnInit {

  form = new FormGroup({ 
    "name": new FormControl('',[Validators.minLength(5), Validators.maxLength(40)]),
    "price": new FormControl('',[Validators.required]),
    "stock": new FormControl<number>(0,[Validators.required]),
    "color": new FormControl('',[Validators.required]),
    "id": new FormControl(),
  })


  productId = 0

  constructor(
    private productService: ProductsService,
    private mediaService: MediaService,
    private toastr: ToastrService,
    private route: ActivatedRoute
    ){}


  ngOnInit(){
    this.getData();
    
  }

  getData(){
    this.route.params.subscribe({next:(res:any)=>{
      this.productId = res.id;
      this.getProduct()
    }})
  }


  getProduct(){
    this.productService.getById(this.productId).subscribe({
      next: (res:any)=>{
        console.log(res);
        
        this.form.patchValue({
          name:res.data.name,
          stock:res.data.stock,
          color:res.data.color,
          id:this.productId,
          price:res.data.price
        })
      }
    })
  }

  editProduct(){
    let copy = this.form.value;
    copy.stock = Number(copy.stock);

    this.productService.updateProduct(this.form.value).subscribe({
      next: (res:any)=>{
        this.showSuccess()
      },

      error: (e:any)=>{
        
      }
    })
    
  }

  showSuccess() {
    let title = 'عملیات موفقیت آمیز بود'
    let msg = 'محصول  ویرایش شد'
    this.toastr.success(title, msg);
  }

  showError() {
    let title = 'عملیات با شکست روبرو شد'
    let msg = 'داده ورودی اشتباه است '
    this.toastr.error(title, msg);
  }


}
