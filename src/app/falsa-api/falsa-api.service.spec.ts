import { TestBed } from '@angular/core/testing';

import { FalsaApiService } from './falsa-api.service';

describe('FalsaApiService', () => {
  let service: FalsaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FalsaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
