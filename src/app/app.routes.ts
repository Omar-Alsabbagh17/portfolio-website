import {ExtraOptions, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ContactComponent} from "./components/contact/contact.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AppComponent} from "./app.component";
import {StartComponent} from "./components/start/start.component";

export const routes: Routes = [
  {path: "", component: StartComponent},
  {path: "**", component: NotFoundComponent},
];
