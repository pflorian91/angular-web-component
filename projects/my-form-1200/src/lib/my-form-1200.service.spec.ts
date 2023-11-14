import { TestBed } from '@angular/core/testing';

import { MyForm1200Service } from './my-form-1200.service';

describe('MyForm1200Service', () => {
  let service: MyForm1200Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyForm1200Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
