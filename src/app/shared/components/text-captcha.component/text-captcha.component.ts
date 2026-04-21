import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { CaptchaStateService } from '../../services/captcha-state.service';

@Component({
  selector: 'app-text-captcha',
  imports: [ReactiveFormsModule],
  templateUrl: './text-captcha.component.html',
  styleUrl: './text-captcha.component.css',
})
export class TextCaptchaComponent implements OnInit {
  private captchaState = inject(CaptchaStateService)

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
      this.form.setErrors({ "error": "invalid text" })
      return;
    }

    this.captchaState.setIsStagesDone(true)
  }

  private generateRandomText(len: number) {
    let result = '';

    for (let i = 0; i < len; i++) {
      result += this.characters.charAt(Math.random() * this.characters.length)
    }

    return result
  }
}
