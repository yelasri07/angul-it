import { Component, inject, OnInit, signal } from '@angular/core';
import { SelectImagesComponent } from "../../shared/components/select-images.component/select-images.component";
import { CaptchaStateService } from '../../shared/services/captcha-state.service';
import { CalculComponent } from "../../shared/components/calcul.component/calcul.component";
import { TextCaptchaComponent } from "../../shared/components/text-captcha.component/text-captcha.component";

@Component({
  selector: 'app-captcha-page',
  imports: [SelectImagesComponent, CalculComponent, TextCaptchaComponent],
  templateUrl: './captcha-page.html',
  styleUrl: './captcha-page.css',
})
export class CaptchaPage implements OnInit {
  captchaState = inject(CaptchaStateService)
  currentLevel = signal(this.captchaState.getLevel())

  ngOnInit(): void {
    this.captchaState.setLevel(this.currentLevel())
    this.captchaState.setIsStagesDone(false)
    if (this.currentLevel() === 1 || !this.captchaState.getCaptchaSummary()) {
      this.captchaState.resetCaptchaSummary()
    }
  }

  handleLevel(level: number) {
    this.captchaState.setLevel(level)
    this.currentLevel.set(level)
  }

  incrementNbOfFails() {
    if (!this.captchaState.getCaptchaSummary()) {
      this.captchaState.resetCaptchaSummary()
    }

    const captchaSummary = this.captchaState.getCaptchaSummary()
    if (captchaSummary && !isNaN(captchaSummary.number_of_failed)) {
      this.captchaState.setCaptchaSummary({
        ...captchaSummary!,
        number_of_failed: captchaSummary?.number_of_failed + 1
      })
    }
  }
}
