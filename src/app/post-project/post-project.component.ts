import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, startWith } from 'rxjs/operators';
import { Jobs } from '../jobs';
import { JobsService } from '../jobs.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map, filter } from 'rxjs/operators';
import { SkillsService } from '../skills.service';
import { Skills } from './skills';
import { Project } from '../free-lance-jobs/Project';
import { User } from '../user';
@Component({
  selector: 'app-post-project',
  templateUrl: './post-project.component.html',
  styleUrls: ['./post-project.component.css']
})
export class PostProjectComponent implements OnInit {
  results: Skills[];
  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute
            , private jobService: JobsService, private http: HttpClient, public skillService: SkillsService) {
            }
  projectForm: FormGroup;
  selectedJob: Jobs;
  title: any;
  jobs: Jobs[];
  jobsFromService: Jobs[];
  id = 0;
  filteredStates: Observable<any[]>;
  project = new Project();
  ngOnInit() {
    this.projectForm = this.formBuilder.group(
      {projectName: ['', Validators.required],
      projectDescription: ['', Validators.required],
      skills : ['']
    }
    );
    this.id = +this.router.snapshot.paramMap.get('title');
    this.getJobs().subscribe( j => this.jobs = j);
    this.skillService.getSkills();
    this.isJObsPopulated();
    this.skillService.getSkills().subscribe(
      res => this.results = res
    );
    console.log('res' + this.results);
    this.filteredStates = this.projectForm.get('skills').valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this.filterStates(state) : this.results)
    );
   }
   getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>('assets//jobs.JSON').pipe(
      tap(jobs =>
         console.log('sds' + JSON.stringify(jobs))
        )
    );
  }
  onsubmit() {
    alert('submit is clicked');
    console.log('jo' + this.jobs);
  }
  isJObsPopulated() {
    this.jobsFromService = this.jobService.jobs;
    console.log('jh' + JSON.stringify(this.jobsFromService));
    // this.product = this.productService.products.filter((product: any) => product.productId === this.id)[0];
    this.selectedJob = this.jobService.jobs.filter((job: any) => job.id === this.id)[0];
    console.log(' bo ' + this.selectedJob);
  }

 filterStates(name: string) {
  return this.results.filter(state =>
    state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
}
getSelectedSkills(skill: string) {
  if (this.isSkillValid(skill)) {
    this.project.skills.push(skill);
    console.log('skg' + JSON.stringify(this.project.skills));
  }
  this.projectForm.get('skills').setValue(null);
}
isSkillValid(skill: string) {
  if (skill != null && skill !== undefined && !this.project.skills.includes(skill) && this.project.skills.length <= 4)  {
    return true;
  }
  return false;
}
removeSkill(skill: string) {
  // const index = this.project.skills.indexOf(skill, 0);
  // if (index > -1) {
  //   this.project.skills.splice(index, 1);
  // }
  this.project.skills = this.project.skills.filter( s => s !== skill);
  console.log('444' + JSON.stringify(this.project.skills));

}
addSkill() {
  const sk = this.projectForm.get('skills');
  if (this.isSkillValid(sk.value)) {
  this.project.skills.push(sk.value);
  console.log('ddddddd' + JSON.stringify(this.project.skills));
  sk.setValue(null);
  }
}

}
