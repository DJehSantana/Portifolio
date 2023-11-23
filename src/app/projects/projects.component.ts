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
    const project1: Project = {
      name: "Projeto1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Vestibulum condimentum felis ac blandit aliquet Mauris pellentesque, sem vitae aliquet porttitor, ligula dolor consequat magna, quis sodales sapien turpis eu lectus"
    }
    const project2: Project = {
      name: "Projeto1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Vestibulum condimentum felis ac blandit aliquet Mauris pellentesque, sem vitae aliquet porttitor, ligula dolor consequat magna, quis sodales sapien turpis eu lectus"
    }


    this.projects.push(project1, project2);
    //this.projectService.getProjects().then((data) => (this.projects = data.slice(0, 5)));
  }


}


