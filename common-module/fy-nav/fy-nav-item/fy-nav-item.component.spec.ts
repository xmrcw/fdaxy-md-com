import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyNavItemComponent } from './fy-nav-item.component';

describe('FyNavItemComponent', () => {
  let component: FyNavItemComponent;
  let fixture: ComponentFixture<FyNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
