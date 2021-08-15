import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFromComponent } from './r-from.component';

describe('RFromComponent', () => {
  let component: RFromComponent;
  let fixture: ComponentFixture<RFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
