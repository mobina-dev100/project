import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(private router : Router){

  }

  ngOnInit(){
    setTimeout(() => {
      this.router.navigateByUrl('/login')
    }, 3000);
  }
}
