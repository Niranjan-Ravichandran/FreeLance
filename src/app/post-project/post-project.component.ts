import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Jobs } from '../jobs';
import { JobsService } from '../jobs.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-post-project',
  templateUrl: './post-project.component.html',
  styleUrls: ['./post-project.component.css']
})
export class PostProjectComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute
            , private jobService: JobsService, private http: HttpClient) { }
  projectForm: FormGroup;
  selectedJob: Jobs;
  title: any;
  jobs: Jobs[];
  jobsFromService: Jobs[];
  id = 0;
  ngOnInit() {
    this.projectForm = this.formBuilder.group(
      {projectName: ['', Validators.required],
      projectDescription: ['', Validators.required]}
    );
    this.id = +this.router.snapshot.paramMap.get('title');
    this.getJobs().subscribe( j => this.jobs = j);
    this.isJObsPopulated();
   }
   getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>('assets//jobs.JSON').pipe(
      tap(jobs =>
         console.log('sds' + JSON.stringify(jobs))
        )
    );
  }
  onsubmit() {
    console.log(this.jobs);
  }
  isJObsPopulated() {
    this.jobsFromService = this.jobService.jobs;
    console.log('jh' + JSON.stringify(this.jobsFromService));
    // this.product = this.productService.products.filter((product: any) => product.productId === this.id)[0];
    this.selectedJob = this.jobService.jobs.filter((job: any) => job.id === this.id)[0];
    console.log(this.selectedJob);
  }
}
