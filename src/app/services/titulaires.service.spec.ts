import { TestBed } from '@angular/core/testing';

import { TitulairesService } from './titulaires.service';

describe('TitulairesService', () => {
  let service: TitulairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitulairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
