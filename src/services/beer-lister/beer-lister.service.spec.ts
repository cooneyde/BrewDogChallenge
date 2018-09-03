import { TestBed, inject } from '@angular/core/testing';

import { BeerListerService } from './beer-lister.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BeerListerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerListerService],
      imports: [HttpClientTestingModule]
    });
  });


  it('should be created', inject([BeerListerService], (service: BeerListerService) => {
    expect(service).not.toBeNull();
    expect(service.http).not.toBeNull();
    expect(service.http instanceof HttpClient).toBeTruthy();
  }));
});
