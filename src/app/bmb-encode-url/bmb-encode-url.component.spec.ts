import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbEncodeUrlComponent } from './bmb-encode-url.component';

describe('BmbEncodeUrlComponent', () => {
  let component: BmbEncodeUrlComponent;
  let fixture: ComponentFixture<BmbEncodeUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmbEncodeUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmbEncodeUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
