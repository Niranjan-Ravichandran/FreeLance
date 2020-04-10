import { Injectable } from '@angular/core';
import { HttpClientModule, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './Project';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FlService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('assets//projects.JSON').pipe(
      tap(projects =>
         console.log (JSON.stringify(projects))
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
