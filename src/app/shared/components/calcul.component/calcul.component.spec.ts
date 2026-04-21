import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculComponent } from './calcul.component';

describe('CalculComponent', () => {
  let component: CalculComponent;
  let fixture: ComponentFixture<CalculComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
