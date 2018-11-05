import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbFooterComponent } from './bmb-footer.component';

describe('BmbFooterComponent', () => {
  let component: BmbFooterComponent;
  let fixture: ComponentFixture<BmbFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmbFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmbFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
