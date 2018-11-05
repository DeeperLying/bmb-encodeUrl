import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbNotFoundComponent } from './bmb-not-found.component';

describe('BmbNotFoundComponent', () => {
  let component: BmbNotFoundComponent;
  let fixture: ComponentFixture<BmbNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmbNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmbNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
