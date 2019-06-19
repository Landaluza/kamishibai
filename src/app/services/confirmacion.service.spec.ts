import { TestBed } from '@angular/core/testing';

import { ConfirmacionService } from './confirmacion.service';

describe('ConfirmacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmacionService = TestBed.get(ConfirmacionService);
    expect(service).toBeTruthy();
  });
});
