import { TestBed } from '@angular/core/testing';

import { EntreComponentsService } from './entre-components.service';

describe('EntreComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntreComponentsService = TestBed.get(EntreComponentsService);
    expect(service).toBeTruthy();
  });
});
