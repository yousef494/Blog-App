import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './components/template/main/main.component';



import { BlogComponent } from './components/blog/blog.component';
import { AlgsComponent } from './components/algs/algs.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';
import { BotComponent } from './components/bot/bot.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full'
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'bot',
        component: BotComponent
      },
      {
        path: 'search/:searchTxt',
        component: BlogComponent
      },
      {
        path: 'blog/:searchTxt',
        component: BlogComponent
      },
      {
        path: 'algs',
        component: AlgsComponent
      },
      {
        path: 'algs/:searchTxt',
        component: AlgsComponent
      }
    ]
  },{
    path: 'portofolio',
    component: PortofolioComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
