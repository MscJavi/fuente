import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    {
        path: '',
        children: [
            {
                path: '',
                component: HomePageComponent,
            },
        ],
    },
];