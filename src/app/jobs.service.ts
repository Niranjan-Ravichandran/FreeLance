import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Jobs } from './jobs';
import { catchError, tap, map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JobsService  {
  private project: Observable<Jobs[]>;
  public jobs: Jobs[];
  public skills: any[];
  constructor(private http: HttpClient) {
  }
  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>('assets//jobs.JSON').pipe(
      tap(jobs =>
         // JSON.stringify(jobs)
          this.jobs = jobs
         ),
      catchError(err => this.handleError)
    );
  }
  // getValue(): Jobs {
  //   const a: Jobs = this.jobs.filter((product: any) => product.id === 101)[0];
  //   return a;
  // }
  handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if ( err instanceof Error) {
      errMsg = err.error.message;
    } else {
      errMsg = err.error.status;
    }
    console.log(errMsg);
  }
  getSkills(): Observable<any[]> {
    return this.http.get<Jobs[]>('assets//skills.JSON').pipe(
      tap(skill =>
         // JSON.stringify(jobs)
          this.skills = skill
         ),
      catchError(err => this.handleError)
    );
  }


}



