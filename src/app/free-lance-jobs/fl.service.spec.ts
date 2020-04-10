import { TestBed } from '@angular/core/testing';

import { FlService } from './fl.service';

describe('FlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlService = TestBed.get(FlService);
    expect(service).toBeTruthy();
  });
});
