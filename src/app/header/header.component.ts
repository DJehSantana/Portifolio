import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Sobre mim',
        icon: 'pi pi-fw pi-user',
        routerLink: 'about-me',
        fragment: 'aboutMe'
      },
      {
        label: 'Projetos',
        icon: 'pi pi-fw pi-desktop',
        routerLink: 'projects',
        fragment: 'myProjects'
      },
      {
        label: 'Contato',
        icon: 'pi pi-fw pi-whatsapp',
        routerLink: 'footer',
        fragment: 'contact'
      }
    ]

  }

}
