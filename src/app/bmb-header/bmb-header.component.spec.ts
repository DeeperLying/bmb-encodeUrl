import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbHeaderComponent } from './bmb-header.component';

describe('BmbHeaderComponent', () => {
  let component: BmbHeaderComponent;
  let fixture: ComponentFixture<BmbHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmbHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
