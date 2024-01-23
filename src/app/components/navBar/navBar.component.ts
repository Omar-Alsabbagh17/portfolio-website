import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, IsActiveMatchOptions} from "@angular/router";
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";
import {ExperienceComponent} from "../experience/experience.component";
import {HomeComponent} from "../home/home.component";


@Component({
  selector: 'app-navBar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    HomeComponent
  ],
  templateUrl: './navBar.component.html',
  styleUrl: './navBar.component.css'
})
export class NavBarComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(value=>{
      this.onButtonClick(value)
    })
  }

  onButtonClick(section:string|null ){
    if (section){
      if (section === "home"){
        let element = document.getElementById(section);
        scrollTo({
                      // @ts-ignore
                      top: element.clientHeight / 2,
                      // @ts-ignore
                      left: element.clientWidth / 2,
                      behavior: "smooth"
        });
      } else {
        // @ts-ignore
        document.getElementById(section).scrollIntoView({behavior: "smooth", block: 'center', inline: 'center'});
      }
    }

  }
  // used to make sure that only the current fragment is active
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

}
