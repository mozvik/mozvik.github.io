import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent, data: { animation: 0 } },
//   { path: 'about', component: AboutComponent, data: { animation: 1 } },
//   { path: 'skills', component: SkillsComponent, data: { animation: 2 } },
//   { path: 'portfolio', component: PortfolioComponent, data: { animation: 3 } },
//   { path: 'contact', component: ContactComponent, data: { animation: 4 } },
//   { path: '**', component: HomeComponent, data: { animation: 0 } },
// ];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
