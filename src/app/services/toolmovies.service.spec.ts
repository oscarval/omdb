import { TestBed, inject } from '@angular/core/testing';

import { ToolmoviesService } from './toolmovies.service';

describe('ToolmoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolmoviesService]
    });
  });

  it('should be created', inject([ToolmoviesService], (service: ToolmoviesService) => {
    expect(service).toBeTruthy();
  }));
});
