import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HlComposerComponent } from './hl-composer.component';

describe('HlComposerComponent', () => {
  let component: HlComposerComponent;
  let fixture: ComponentFixture<HlComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
