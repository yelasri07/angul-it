import { Component, inject } from '@angular/core';
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

  navigateToCaptchaPage() {
    this.captchaState.setLevel(1)
    this.router.navigateByUrl("/captcha")
  }
}
