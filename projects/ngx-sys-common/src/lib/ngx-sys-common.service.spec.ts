import { TestBed } from '@angular/core/testing';

import { NgxSysCommonService } from './ngx-sys-common.service';

describe('NgxSysCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSysCommonService = TestBed.get(NgxSysCommonService);
    expect(service).toBeTruthy();
  });
});
