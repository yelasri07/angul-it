import { AfterViewInit, Component, inject, OnInit, signal } from '@angular/core';
import { CaptchaStateService } from '../../shared/services/captcha-state.service';
import confetti from 'canvas-confetti';
import { TimeFormatPipe } from '../../shared/pipes/time-format-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-result-page',
  imports: [TimeFormatPipe, RouterLink],
  templateUrl: './result-page.html',
  styleUrl: './result-page.css',
})
export class ResultPage implements OnInit, AfterViewInit {
  private captchaState = inject(CaptchaStateService)
  summary = signal(this.captchaState.getCaptchaSummary())

  ngOnInit(): void {
    this.captchaState.setLevel(1)
  }

  ngAfterViewInit(): void {
    // const duration = 3000;

    // confetti({
    //   particleCount: 100,
    //   spread: 160,
    //   origin: { y: 0.6 },
    // });

    // setTimeout(() => confetti.reset(), duration);
  }

}
