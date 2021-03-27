import { TestBed } from '@angular/core/testing';

import { ProcesshttpmssgService } from './processhttpmssg.service';

describe('ProcesshttpmssgService', () => {
  let service: ProcesshttpmssgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcesshttpmssgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
