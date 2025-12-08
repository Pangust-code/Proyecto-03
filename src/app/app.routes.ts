import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { EstilosPage } from './features/EstilosPage/EstilosPage';
import { DaisyuiPageComponent } from './features/DaisyuiPageComponent/DaisyuiPageComponent';
import { SimpsonsPage } from './features/SimpsonsPage/SimpsonsPage';
import { SimpsonsDetailPage } from './features/SimpsonsDetailPage/SimpsonsDetailPage';
import { LoginPage } from './features/auth/pages/login-page/login-page';
import { RegisterPage } from './features/auth/pages/register-page/register-page';

export const routes: Routes = [


    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'register',
        component: RegisterPage
    },
    {
        path: 'home',
        component: DaisyuiPageComponent
    },
    {
        path: 'estilos',
        component: EstilosPage
    },
    {
        path: 'simpsons',
        component: SimpsonsPage
    },
    {
      path: 'simpsons/:id',
      component: SimpsonsDetailPage
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

