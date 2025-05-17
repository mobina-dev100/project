import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-products',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.scss'
})
export class AddProductsComponent {

  form = new FormGroup({
    "name": new FormControl('',[Validators.minLength(5), Validators.maxLength(40)]),
    "price": new FormControl('',[Validators.required]),
    "stock": new FormControl<number>(0,[Validators.required]),
    "color": new FormControl('',[Validators.required]),
  })

  constructor(
    private productService: ProductsService,
    private toastr: ToastrService
    ){}


  ngOnInit(){
    this.form.patchValue({name:'کفش مجلسی'})
  }


  addProduct(){
    let copy = this.form.value;
    copy.stock = Number(copy.stock);

    this.productService.addProduct(this.form.value).subscribe({
      next: (res:any)=>{
        this.showSuccess()
      },

      error: (e:any)=>{
        
      }
    })
    
  }

  showSuccess() {
    let title = 'عملیات موفقیت آمیز بود'
    let msg = 'محصول جدید اضافه شد'
    this.toastr.success(title, msg);
  }

  showError() {
    let title = 'عملیات با شکست روبرو شد'
    let msg = 'داده ورودی اشتباه است '
    this.toastr.error(title, msg);
  }
}
