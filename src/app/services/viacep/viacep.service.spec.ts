import { TestBed } from '@angular/core/testing';
import { ViaCepService } from './viacep.service';


describe('ViacepService', () => {
  let service: ViaCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViaCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
