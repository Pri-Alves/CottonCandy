import { TestBed } from '@angular/core/testing';

import { PerfilHomeService } from './perfil.service';

describe('PerfilHomeService', () => {
  let service: PerfilHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
