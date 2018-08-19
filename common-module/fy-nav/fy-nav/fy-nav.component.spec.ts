import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyNavComponent } from './fy-nav.component';

describe('FyNavComponent', () => {
  let component: FyNavComponent;
  let fixture: ComponentFixture<FyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
