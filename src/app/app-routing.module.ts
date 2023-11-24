import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full"
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
