import { TestBed, inject } from '@angular/core/testing';

import { ConnectBoService } from './connect-bo.service';

describe('ConnectBoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectBoService]
    });
  });

  it('should be created', inject([ConnectBoService], (service: ConnectBoService) => {
    expect(service).toBeTruthy();
  }));
});
