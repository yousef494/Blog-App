import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BlogComponent } from './components/blog/blog.component';
import { SearchComponent } from './components/search/search.component';
import { TemplateComponent } from './components/template/main/main.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';

import { NgwWowService } from 'ngx-wow';


import { BlogService } from './services/blog.service';
import { ResizeService } from './services/resize.service';
import { routerTransition } from './services/page.animation';
import { AuthService } from './services/auth.service';
import { AlgsComponent } from './components/algs/algs.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';
import { BotComponent } from './components/bot/bot.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    SearchComponent,
    TemplateComponent,
    SidebarComponent,
    AlgsComponent,
    PortofolioComponent,
    BotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    BlogService,
    ResizeService,
    AuthService,
    NgwWowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
