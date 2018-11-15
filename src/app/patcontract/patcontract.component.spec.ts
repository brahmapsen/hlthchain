import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatcontractComponent } from './patcontract.component';

describe('PatcontractComponent', () => {
  let component: PatcontractComponent;
  let fixture: ComponentFixture<PatcontractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatcontractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
