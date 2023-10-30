import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliesComponent } from './allies.component';

describe('AlliesComponent', () => {
  let component: AlliesComponent;
  let fixture: ComponentFixture<AlliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlliesComponent]
    });
    fixture = TestBed.createComponent(AlliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
