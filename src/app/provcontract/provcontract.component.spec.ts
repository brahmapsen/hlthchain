import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvcontractComponent } from './provcontract.component';

describe('ProvcontractComponent', () => {
  let component: ProvcontractComponent;
  let fixture: ComponentFixture<ProvcontractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvcontractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
