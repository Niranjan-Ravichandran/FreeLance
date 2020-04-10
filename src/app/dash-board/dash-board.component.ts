import { Component, OnInit } from '@angular/core';
import { Jobs } from '../jobs';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  jobs: Jobs[];
  title = 'FreeLance';
  selectedProject: Jobs;
  constructor(private jobService: JobsService) {
  }
  ngOnInit() {
    this.jobService.getJobs().subscribe(
      jobs => this.jobs = jobs
    );
  }
}
