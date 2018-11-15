import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthrecComponent } from './authrec.component';

describe('AuthrecComponent', () => {
  let component: AuthrecComponent;
  let fixture: ComponentFixture<AuthrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
