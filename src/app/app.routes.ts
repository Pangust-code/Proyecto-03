import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { EstilosPage } from './features/EstilosPage/EstilosPage';
import { DaisyuiPageComponent } from './features/DaisyuiPageComponent/DaisyuiPageComponent';
import { SimpsonsPage } from './features/SimpsonsPage/SimpsonsPage';
import { SimpsonsDetailPage } from './features/SimpsonsDetailPage/SimpsonsDetailPage';

export const routes: Routes = [

  {
    path: '',
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
  }


];
