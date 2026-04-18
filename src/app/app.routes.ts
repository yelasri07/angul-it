import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { CaptchaPage } from './features/captcha-page/captcha-page';
import { ResultPage } from './features/result-page/result-page';
import { NotFoundPage } from './features/not-found-page/not-found-page';

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
        component: ResultPage
    },
    {
        path: "**",
        component: NotFoundPage
    },
];
