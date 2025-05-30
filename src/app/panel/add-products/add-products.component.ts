import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { MediaService } from '../../services/media.service';
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
    "file": new FormControl(),
  })



  constructor(
    private productService: ProductsService,
    private mediaService: MediaService,
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


        const formData = new FormData();
        formData.append('file',this.form.get('file')?.value);
        formData.append('product_id',res.id);


        this.mediaService.upload(formData).subscribe({
          next: (mediaRes:any)=>{
            this.showSuccess()
          },
          error: (e:any)=>{
        
          }
        })
        
        
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

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.form.get('file')?.setValue(null);
      return;
    }
    const file = input.files[0];
    this.form.get('file')?.setValue(file);
  }
}
