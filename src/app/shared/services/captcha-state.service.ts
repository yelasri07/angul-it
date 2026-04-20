import { Injectable } from '@angular/core';
import { captchaState } from '../../core/interfaces/captcha-state.interface';

@Injectable({
  providedIn: 'root',
})
export class CaptchaStateService {

  private state: captchaState = {
    level: 1,
    isDone: false
  }

  

}
