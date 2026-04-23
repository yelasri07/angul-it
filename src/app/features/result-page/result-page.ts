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

  ngOnInit(): void {
    this.captchaState.setLevel(1)
  }

}
