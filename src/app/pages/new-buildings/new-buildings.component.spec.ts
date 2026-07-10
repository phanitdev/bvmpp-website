import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBuildingsComponent } from './new-buildings.component';

describe('NewBuildingsComponent', () => {
  let component: NewBuildingsComponent;
  let fixture: ComponentFixture<NewBuildingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBuildingsComponent]
    });
    fixture = TestBed.createComponent(NewBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
