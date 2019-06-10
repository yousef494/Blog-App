import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { TemplateComponent } from './components/template/main/main.component';

const routes: Routes = [{
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
      path: 'search/:searchTxt',
      component: BlogComponent
    },
    {
      path: 'blog/:searchTxt',
      component: BlogComponent
    }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
