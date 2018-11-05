import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbListComponent } from './bmb-list.component';

describe('BmbListComponent', () => {
  let component: BmbListComponent;
  let fixture: ComponentFixture<BmbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
