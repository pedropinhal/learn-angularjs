import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpModule }    from '@angular/http';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService],
      imports:[HttpModule]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
