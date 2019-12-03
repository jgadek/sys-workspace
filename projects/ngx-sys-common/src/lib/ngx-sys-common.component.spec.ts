import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSysCommonComponent } from './ngx-sys-common.component';

describe('NgxSysCommonComponent', () => {
  let component: NgxSysCommonComponent;
  let fixture: ComponentFixture<NgxSysCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSysCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSysCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
