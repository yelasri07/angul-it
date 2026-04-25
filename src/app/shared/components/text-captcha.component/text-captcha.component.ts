import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CaptchaStateService } from '../../services/captcha-state.service';
import { Router } from '@angular/router';
import { NavigateButtonComponent } from "../navigate-button.component/navigate-button.component";
import { ErrorAlertComponent } from "../error-alert.component/error-alert.component";

@Component({
  selector: 'app-text-captcha',
  imports: [ReactiveFormsModule, NavigateButtonComponent, ErrorAlertComponent],
  templateUrl: './text-captcha.component.html',
  styleUrl: './text-captcha.component.css',
})
export class TextCaptchaComponent implements OnInit {
  private captchaState = inject(CaptchaStateService)
  private router = inject(Router)

  @Output()
  nextLevel = new EventEmitter();

  @Output()
  nbOfFails = new EventEmitter();

  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  randomText = signal('')
  form = new FormControl('')

  ngOnInit(): void {
    this.randomText.set(this.generateRandomText(7))
  }

  onSubmit(e: Event) {
    e.preventDefault()
    let value = this.form.value

    if (value != this.randomText()) {
      this.form.setErrors({ "error": "Please provide a valid result." })
      this.nbOfFails.emit()
      return;
    }

    if (!this.captchaState.getCaptchaSummary()) this.captchaState.resetCaptchaSummary()

    this.captchaState.setCaptchaSummary({
      ...this.captchaState.getCaptchaSummary()!,
      end_steps_time: Date.now()
    })

    this.captchaState.setIsStagesDone(true)
    this.router.navigateByUrl("/result")
  }

  handlePrevious() {
    this.nextLevel.emit(2)
  }

  private generateRandomText(len: number) {
    let result = '';

    for (let i = 0; i < len; i++) {
      result += this.characters.charAt(Math.random() * this.characters.length)
    }

    return result
  }
}
