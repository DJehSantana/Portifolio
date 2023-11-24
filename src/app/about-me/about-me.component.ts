import { Component, OnInit } from '@angular/core';
import { Icon } from '../model/icon.model';
import { AboutMeService } from '../services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  empresa: string = "Stefanini Brasil"
  cargoAtual: string = "Analista de Desenvolvimento de Sistemas"
  icons: Icon[] = [];

  constructor(private aboutMeService: AboutMeService) {

  }

  ngOnInit(): void {
    this.icons = this.aboutMeService.getIcons();
  }





}
