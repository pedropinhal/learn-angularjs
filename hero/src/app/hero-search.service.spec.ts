import { TestBed, inject } from '@angular/core/testing';

import { HeroSearchService } from './hero-search.service';
import { HttpModule }    from '@angular/http';

describe('HeroSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroSearchService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([HeroSearchService], (service: HeroSearchService) => {
    expect(service).toBeTruthy();
  }));
});
