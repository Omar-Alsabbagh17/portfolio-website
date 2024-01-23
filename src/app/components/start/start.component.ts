import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";
import {ExperienceComponent} from "../experience/experience.component";
import {NavBarComponent} from "../navBar/navBar.component";
import {HomeComponent} from "../home/home.component";
import {Router} from "@angular/router";
import {CoursesComponent} from "../courses/courses.component";
import {ProjectsComponent} from "../projects/projects.component";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    NavBarComponent,
    HomeComponent,
    CoursesComponent,
    ProjectsComponent
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent{

  constructor() {

  }



}

