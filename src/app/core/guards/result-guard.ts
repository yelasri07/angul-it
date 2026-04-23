import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CaptchaStateService } from '../../shared/services/captcha-state.service';

export const resultGuard: CanActivateFn = (route, state) => {
  const captchaState = inject(CaptchaStateService)
  const router = inject(Router)

  if (!captchaState.getIsStagesDone()) {
    router.navigateByUrl("/")
    return false;
  }

  return true;
};
