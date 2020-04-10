import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeLanceJobsComponent } from './free-lance-jobs.component';

describe('FreeLanceJobsComponent', () => {
  let component: FreeLanceJobsComponent;
  let fixture: ComponentFixture<FreeLanceJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeLanceJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeLanceJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
