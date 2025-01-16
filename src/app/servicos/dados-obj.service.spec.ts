import { TestBed } from '@angular/core/testing';

import { DadosObjService } from './dados-obj.service';

describe('DadosObjService', () => {
  let service: DadosObjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosObjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
