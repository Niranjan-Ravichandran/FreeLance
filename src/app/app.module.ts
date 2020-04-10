import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { JobsService } from './jobs.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PostProjectComponent } from './post-project/post-project.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FreeLanceJobsComponent } from './free-lance-jobs/free-lance-jobs.component';
import { FlService } from './free-lance-jobs/fl.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    PostProjectComponent,
    FreeLanceJobsComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [JobsService , FlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
