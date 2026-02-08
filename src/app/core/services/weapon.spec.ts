import { TestBed } from '@angular/core/testing';

import { WeaponService } from './weapon';

describe('Weapon', () => {
  let service: WeaponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
