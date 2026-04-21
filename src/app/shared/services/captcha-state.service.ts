import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaptchaStateService {

  private level = 2;

  getLevel() {
    return this.level
  }

  setLevel(level: number) {
    this.level = level
  }

}
