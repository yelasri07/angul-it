import { Component, inject, signal } from '@angular/core';
import { CaptchaStateService } from '../../services/captcha-state.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navigate-button',
  imports: [NgClass],
  templateUrl: './navigate-button.component.html',
  styleUrl: './navigate-button.component.css',
})
export class NavigateButtonComponent {
  private captchaState = inject(CaptchaStateService)
  currentLevel = signal(this.captchaState.getLevel())

}
