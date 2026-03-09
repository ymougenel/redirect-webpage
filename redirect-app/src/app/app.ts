import { Component, signal } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'my-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('redirect-app');

  projects: Project[] = [
    {
      id: 1,
      title: 'AWS Site Screen',
      description: 'A project related to AWS site screening.',
      image: 'assets/projects/aws_site_screen.png',
      projectLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'COVID-19 Tracker',
      description: 'An application to track COVID-19 data.',
      image: 'assets/projects/covid19.png',
      projectLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Histoire de Rues',
      description: 'A project about street histories.',
      image: 'assets/projects/histoire_de_rues.png',
      projectLink: '#',
      githubLink: '#'
    }
  ];
}
