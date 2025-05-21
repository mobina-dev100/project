import { CommonModule } from '@angular/common';
import { Component, getNgModuleById } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  form = new FormGroup({
    "name": new FormControl('',[Validators.minLength(5)]),
    "phone": new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
    "email": new FormControl('',[Validators.email]),
    "password": new FormControl('',[Validators.minLength(6), Validators.required, Validators.maxLength(25)]),
  })

  login(){
    console.log(this.form.value);
  }
  toggle(){
    const imgEye = document.getElementById('img-eye') as HTMLImageElement;
    
    const eye = document.getElementById('eye') as HTMLInputElement;
    if (eye.type === 'password') {
      eye.type = 'text'
      imgEye.src = '/img/eye-off.svg';
    } else {
      eye.type = 'password'
      imgEye.src = '/img/eye.svg';
    }
   
  }

 
}
