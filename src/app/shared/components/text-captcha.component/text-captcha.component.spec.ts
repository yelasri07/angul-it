import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCaptchaComponent } from './text-captcha.component';

describe('TextCaptchaComponent', () => {
  let component: TextCaptchaComponent;
  let fixture: ComponentFixture<TextCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextCaptchaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextCaptchaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
