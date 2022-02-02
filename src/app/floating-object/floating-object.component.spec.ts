import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingObjectComponent } from './floating-object.component';

describe('FloatingObjectComponent', () => {
  let component: FloatingObjectComponent;
  let fixture: ComponentFixture<FloatingObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
