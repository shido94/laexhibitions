import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blog/blogdetails/blogdetails.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './sitewraper/header/header.component';
import { FooterComponent } from './sitewraper/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogdetailsComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
