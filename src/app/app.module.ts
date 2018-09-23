import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CreditsComponent } from './credits/credits.component';
import { SongsComponent } from './songs/songs.component';
import { AuthorsComponent } from './authors/authors.component';

export const appRoutes: Routes = [
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

@NgModule({
  declarations: [
    AppComponent,
    CreditsComponent,
    SongsComponent,
    AuthorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
