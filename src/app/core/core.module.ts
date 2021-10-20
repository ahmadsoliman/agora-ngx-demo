import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoggedInGuard } from './guards/logged-in.guard';
import { NotifyService } from './common';

@NgModule({
  declarations: [],
  imports: [RouterModule, HttpClientModule],
  providers: [
    LoggedInGuard,
    NotifyService,
  ],
})
export class CoreModule {}
