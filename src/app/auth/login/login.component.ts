import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  titleText = 'matn test 2';
  show = true;

  username = '';
  password = '';

  constructor(private router : Router){
  }

  ngOnInit(){
    console.log('test2');
    this.fun2();
    let titleText = '';
    let b = this.titleText;
  }

  fun2(){
    console.log('test3');
  }

  login(){
      if(this.username === 'test' && this.password === '12345678'){
        this.router.navigateByUrl('/dashboard');
      }
  }


}
