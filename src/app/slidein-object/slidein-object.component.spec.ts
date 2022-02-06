import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideinObjectComponent } from './slidein-object.component';

describe('SlideinObjectComponent', () => {
  let component: SlideinObjectComponent;
  let fixture: ComponentFixture<SlideinObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideinObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideinObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
