// main feature A module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { LoginComponent } from './account/login/login.component';
import { LayoutModule } from './layout/layout.module';

import { ProfileComponent } from './account/profile/profile.component';
import { SettingsComponent } from './account/settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [LoginComponent, ProfileComponent, SettingsComponent, DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    RouterModule,
    CoreModule,
    SharedModule,
  ],
  exports: [],
})
export class MainModule {}
