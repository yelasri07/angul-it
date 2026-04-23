import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CaptchaStateService } from '../../shared/services/captcha-state.service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private captchaState = inject(CaptchaStateService)
  private router = inject(Router)

  navigateToCaptchaPage(level?: number) {
    if (level) {
      this.captchaState.setLevel(level)
      this.captchaState.resetCaptchaSummary()
    }
    this.router.navigateByUrl("/captcha")
  }
}
