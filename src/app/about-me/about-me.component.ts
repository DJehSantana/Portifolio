import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  empresa: string = "Stefanini Brasil"
  cargoAtual: string = "Analista de Desenvolvimento de Sistemas"

  icons = [
    {
      title: "Java",
      urlImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      altImage: "icone java"
    },
    {
      title: "Spring",
      urlImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      altImage: "icone framework spring"
    },
    {
      title: "PostgreSQL",
      urlImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      altImage: "icone postgresql"
    },
    {
      title: "MySQL",
      urlImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
      altImage: "icone mysql"
    },
    {
      title: "NodeJs",
      urlImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      altImage: "icone nodejs"
    },
    {
      title: "Typescript",
      urlImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      altImage: "icone typescript"
    },
    {
      title: "Jest",
      urlImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      altImage: "icone jest"
    },
    {
      title: "Angular",
      urlImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
      altImage: "icone angular"
    },
    {
      title: "Sass",
      urlImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      altImage: "icone sass"
    }
  ];

}
