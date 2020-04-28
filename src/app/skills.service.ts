import { Injectable } from '@angular/core';
import { Skills } from 'src/app/post-project/skills';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(public http: HttpClient) { }
  public skills: Skills[];
  getSkills(): Observable<any[]> {
    return this.http.get<Skills[]>('assets//skills.JSON').pipe(
      tap(skill =>
         // JSON.stringify(jobs)
          this.skills = skill
         ),
      catchError(err => this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if ( err instanceof Error) {
      errMsg = err.error.message;
    } else {
      errMsg = err.error.status;
    }
    console.log(errMsg);
  }
}
