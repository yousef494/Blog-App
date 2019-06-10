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

import { BlogService } from './services/blog.service';
import { ResizeService } from './services/resize.service';
import { routerTransition } from './services/page.animation';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    SearchComponent,
    TemplateComponent,
    SidebarComponent
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
