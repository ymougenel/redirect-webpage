import { Component, signal } from '@angular/core';
import { Project } from './project.model';
import { projectsData } from './projects.data';

@Component({
  selector: 'my-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('redirect-app');

  projects: Project[] = projectsData;
}
