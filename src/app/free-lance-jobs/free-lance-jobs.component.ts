import { Component, OnInit } from '@angular/core';
import { FlService } from './fl.service';
import { Project } from './Project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-free-lance-jobs',
  templateUrl: './free-lance-jobs.component.html',
  styleUrls: ['./free-lance-jobs.component.css']
})
export class FreeLanceJobsComponent implements OnInit {
  projects: Project[];
  constructor(private flService: FlService, private formBuilder: FormBuilder) { }
  searchForm: FormGroup;
  suggestedSearches: string[];
  ngOnInit() {
      this.searchForm = this.formBuilder.group(
        {searchByCategory: ['', Validators.required],
        searchValue: ['', Validators.required]
      }
      );
      this.flService.getProjects().subscribe( p => this.projects = p);
      this.suggestedSearches = ['Website Development', 'Mobile Development', 'Finance',
                                 'Literature', 'Script writing'];
  }

  addSkill() {}
  getSelectedSkills(value) {

  }
}
