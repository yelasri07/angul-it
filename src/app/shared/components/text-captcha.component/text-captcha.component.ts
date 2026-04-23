import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { CaptchaStateService } from '../../services/captcha-state.service';
import { Router } from '@angular/router';
import { NavigateButtonComponent } from "../next-button.component/navigate-button.component";
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
      return;
    }

    this.captchaState.setIsStagesDone(true)
    this.router.navigateByUrl("/result")
  }

  private generateRandomText(len: number) {
    let result = '';
 
    for (let i = 0; i < len; i++) {
      result += this.characters.charAt(Math.random() * this.characters.length)
    }

    return result
  }
}
