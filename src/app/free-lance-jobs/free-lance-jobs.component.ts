import { Component, OnInit } from '@angular/core';
import { FlService } from './fl.service';
import { Project } from './Project';

@Component({
  selector: 'app-free-lance-jobs',
  templateUrl: './free-lance-jobs.component.html',
  styleUrls: ['./free-lance-jobs.component.css']
})
export class FreeLanceJobsComponent implements OnInit {
  projects: Project[];
  constructor(private flService: FlService) { }

  ngOnInit() {
      this.flService.getProjects().subscribe( p => this.projects = p);
  }

}
