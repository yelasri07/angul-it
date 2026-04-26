import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CaptchaStateService } from '../../shared/services/captcha-state.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private captchaState = inject(CaptchaStateService)
  private router = inject(Router)

  isStagesDone = signal(this.captchaState.getIsStagesDone())

  navigateToCaptchaPage(level?: number) {
    if (level) this.captchaState.setLevel(level)
    this.router.navigateByUrl("/captcha")
  }
}
