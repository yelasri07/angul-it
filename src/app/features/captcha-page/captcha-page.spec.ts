import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaPage } from './captcha-page';

describe('CaptchaPage', () => {
  let component: CaptchaPage;
  let fixture: ComponentFixture<CaptchaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptchaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CaptchaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
