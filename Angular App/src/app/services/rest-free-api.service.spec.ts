import { TestBed } from '@angular/core/testing';

import { RestFreeApiService } from './rest-free-api.service';

describe('RestFreeApiService', () => {
  let service: RestFreeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestFreeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
