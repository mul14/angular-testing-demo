import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sum numbers correctly', () => {
    expect(service.sum(1, 1)).toBe(2)
    expect(service.sum(1, 2, 3)).toBe(6)
    expect(service.sum(1, 2, 3, 4)).toBe(10)
  })
});
