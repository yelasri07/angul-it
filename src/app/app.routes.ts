import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { CaptchaPage } from './features/captcha-page/captcha-page';
import { ResultPage } from './features/result-page/result-page';
import { resultGuard } from './core/guards/result-guard';

export const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        component: HomePage
    },
    {
        path: "captcha",
        component: CaptchaPage
    },
    {
        path: "result",
        component: ResultPage,
        canActivate: [resultGuard]
    },
    {
        path: "**",
        redirectTo: ""
    },
];
