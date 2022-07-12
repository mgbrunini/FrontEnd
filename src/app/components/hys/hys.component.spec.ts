import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HysComponent } from './hys.component';

describe('HysComponent', () => {
  let component: HysComponent;
  let fixture: ComponentFixture<HysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
