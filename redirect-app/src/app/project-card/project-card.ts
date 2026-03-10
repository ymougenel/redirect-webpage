import { Component, Input } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'my-project-card',
  standalone: false,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project!: Project;
}
