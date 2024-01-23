import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor() {

  }
  activeButton: string = 'webDev';

  setActiveButton(button: string) {
    this.activeButton = button;
  }

}
