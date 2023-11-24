import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../model/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [];

  constructor(
    private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
  }


}


