import { TestBed } from '@angular/core/testing';

import { NomeServizioService } from './nome-servizio.service';

describe('NomeServizioService', () => {
  let service: NomeServizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomeServizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
