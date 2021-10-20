import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './core';
import { LoginComponent } from './main/account/login/login.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MainLayoutComponent } from './main/layout/main-layout/main-layout.component';
import { CallbackComponent } from './shared';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [LoggedInGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
