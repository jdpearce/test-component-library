import { TestBed } from '@angular/core/testing';

import { TestComponentLibraryService } from './test-component-library.service';

describe('TestComponentLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestComponentLibraryService = TestBed.get(TestComponentLibraryService);
    expect(service).toBeTruthy();
  });
});
