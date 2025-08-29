import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { HeroComponent } from "./components/hero/hero.component";

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
