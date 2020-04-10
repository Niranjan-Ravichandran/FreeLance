import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PostProjectComponent } from './post-project/post-project.component';
import { FreeLanceJobsComponent } from './free-lance-jobs/free-lance-jobs.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'dashboard' , component: DashBoardComponent} ,
  {path: 'postProject/:title' , component: PostProjectComponent} ,
  {path: 'jobs' , component: FreeLanceJobsComponent} ,
  {path: 'login' , component: LoginComponent} ,
  {path: 'profile' , component: ProfileComponent} ,
  {path: '' , component: HomeComponent , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
