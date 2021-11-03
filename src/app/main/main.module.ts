// main feature A module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { LoginComponent } from './account/login/login.component';
import { LayoutModule } from './layout/layout.module';

import { ProfileComponent } from './account/profile/profile.component';
import { SettingsComponent } from './account/settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallComponent } from './call/call.component';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    SettingsComponent,
    DashboardComponent,
    CallComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    RouterModule,
    CoreModule,
    SharedModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  exports: [],
})
export class MainModule {}
