import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { CaptchaStateService } from '../../shared/services/captcha-state.service';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-result-page',
  imports: [],
  templateUrl: './result-page.html',
  styleUrl: './result-page.css',
})
export class ResultPage implements OnInit, AfterViewInit {
  private captchaState = inject(CaptchaStateService)

  ngOnInit(): void {
    this.captchaState.setLevel(1)
  }

  ngAfterViewInit(): void {
    const duration = 3000;

    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    setTimeout(() => confetti.reset(), duration);
  }

}
