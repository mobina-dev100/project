import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  ngOnInit(){
    setTimeout(() => {
          let elm = document.getElementById('aks1')
          if(elm){
            elm.style.height = '0vh';
          }
          let elmBlue = document.getElementById('aks2')
          if(elmBlue){
            elmBlue.style.height = '50vh';
          }
    }, 3000);
  }
}
