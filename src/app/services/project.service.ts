import * as data from '../../assets/projects/projects.json';
import { Project } from "../model/project.model";

const projectsList = data;

export class ProjectService {
    getProjects(): Project[] {
        return projectsList.projects;
    }
}