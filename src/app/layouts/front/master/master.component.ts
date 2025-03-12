import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../front/header/header.component";
import { FooterComponent } from "../../front/footer/footer.component";

@Component({
  selector: 'app-master',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

}
