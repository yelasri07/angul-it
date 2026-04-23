import { Injectable } from '@angular/core';
import { captchaSummary } from '../../core/interfaces/captcha-state.interface';

@Injectable({
  providedIn: 'root',
})
export class CaptchaStateService {

  private level = 1;
  private isStagesDone = false;

  getLevel() {
    let currentLevel: any = localStorage.getItem("level")
    if (!currentLevel || isNaN(currentLevel)) return this.level

    this.level = parseInt(currentLevel)
    return this.level
  }

  setLevel(level: number) {
    this.level = level
    localStorage.setItem("level", level.toString())
  }

  getIsStagesDone() {
    let value = localStorage.getItem("is_stages_done")
    if (value != "true") return this.isStagesDone

    this.isStagesDone = true
    return this.isStagesDone
  }

  setIsStagesDone(value: boolean) {
    this.isStagesDone = value;
    localStorage.setItem("is_stages_done", String(value))
  }

  getCaptchaSummary() {
    const data = localStorage.getItem('captcha_summary')
    if (!data) return null

    try {
      const captchaSummary = JSON.parse(data)
      return captchaSummary
    } catch {
      return null
    }
  }

  setCaptchaSummary(data: captchaSummary) {
    localStorage.setItem('captcha_summary', JSON.stringify(data))
  }

  resetCaptchaSummary() {
    localStorage.setItem('captcha_summary', JSON.stringify(<captchaSummary>{
      duration: Date.now(),
      number_of_failed: 0
    }))
  }

}
