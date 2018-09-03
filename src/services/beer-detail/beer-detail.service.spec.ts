import { TestBed, inject } from '@angular/core/testing';

import { BeerDetailService } from './beer-detail.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('BeerDetailService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BeerDetailService]
    });
  });


  it('checks the service was created correctly', inject([BeerDetailService], (service: BeerDetailService) => {
    expect(service).not.toBeNull();
    expect(service.http).not.toBeNull();
    expect(service.http instanceof HttpClient).toBeTruthy();
  }));
});
