import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglenavComponent } from './togglenav.component';

describe('TogglenavComponent', () => {
  let component: TogglenavComponent;
  let fixture: ComponentFixture<TogglenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TogglenavComponent]
    });
    fixture = TestBed.createComponent(TogglenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
