import { Component, inject, OnInit } from '@angular/core';
import { CaptchaStateService } from '../../shared/services/captcha-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  imports: [],
  templateUrl: './result-page.html',
  styleUrl: './result-page.css',
})
export class ResultPage implements OnInit {
  private captchaState = inject(CaptchaStateService)
  private router = inject(Router)

  ngOnInit(): void {
    if (!this.captchaState.getIsStagesDone()) {
      this.router.navigateByUrl("/")
    }
  }

}
