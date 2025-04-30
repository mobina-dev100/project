import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    "price": new FormControl(),
    "stock": new FormControl()
  })

  login(){
    console.log(this.form.value);
  }

}
