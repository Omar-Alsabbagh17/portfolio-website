import {Component} from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent{
  constructor() {

  }
  detailsBtnPressed(event: Event){
    let text = (<HTMLElement> event.target).innerText;
    if (text === "More Details"){
      (<HTMLElement> event.target).innerText = "Hide Details";
    }
    else{
      (<HTMLElement> event.target).innerText ="More Details";
    }
  }

}
