import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderserviceComponent } from './renderservice.component';

describe('RenderserviceComponent', () => {
  let component: RenderserviceComponent;
  let fixture: ComponentFixture<RenderserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
