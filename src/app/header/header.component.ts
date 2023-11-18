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
        icon: 'pi pi-fw pi-user'
      },
      {
        label: 'Projetos',
        icon: 'pi pi-fw pi-desktop'
      },
      {
        label: 'Contato',
        icon: 'pi pi-fw pi-whatsapp'
      }
    ]

  }

}
