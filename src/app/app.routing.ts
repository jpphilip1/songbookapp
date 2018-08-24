import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
//   { path: 'login/', component: LoginComponent },
  
  // otherwise redirect to unauthorized-access page
  { path: '**', redirectTo: 'unauthorized-access' }
];

export const routing = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });