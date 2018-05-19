import { TestBed, inject } from '@angular/core/testing';

import { OmdbservicesService } from './omdbservices.service';

describe('OmdbservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbservicesService]
    });
  });

  it('should be created', inject([OmdbservicesService], (service: OmdbservicesService) => {
    expect(service).toBeTruthy();
  }));
});
