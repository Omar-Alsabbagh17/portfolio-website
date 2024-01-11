import {Component} from '@angular/core';
import {NavBarComponent} from "../navBar/navBar.component";
import {AboutComponent} from "../about/about.component";
import {ExperienceComponent} from "../experience/experience.component";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  constructor() {
  }


}
