import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h2>Home</h2><a routerLink="/profile">Go to Profile (protected)</a>`,
  standalone: true
})
export class HomeComponent {}

@Component({
  selector: 'app-profile',
  template: `<h2>Profile (Protected)</h2>`,
  standalone: true
})
export class ProfileComponent {}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [OktaAuthGuard] },
  { path: 'login/callback', component: OktaCallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
