import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreditsComponent } from './credits/credits.component';
import { SongsComponent } from './songs/songs.component';
import { AuthorsComponent } from './authors/authors.component';

export const router: Routes = [
  {
    path: '**',
    redirectTo: 'songs',
    pathMatch: 'full'
  },
  {
    path: '', 
    redirectTo: 'songs', 
    pathMatch: 'full'
  },
  {
    path: 'credits',
    component: CreditsComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'songs',
    component: SongsComponent
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);