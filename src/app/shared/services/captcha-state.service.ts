import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaptchaStateService {

  private level = 3;
  private isStagesDone = false;

  getLevel() {
    return this.level
  }

  setLevel(level: number) {
    this.level = level
  }

  getIsStagesDone() {
    return this.isStagesDone
  }

  setIsStagesDone(value: boolean) {
    this.isStagesDone = value;
  }

}
