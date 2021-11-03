import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';
import { NgxAgoraModule } from 'ngx-agora';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService, CoreModule } from './core';
import { Auth0CustomUIService } from './core/auth/auth0-custom-ui.service';
import { ServerErrorInterceptor } from './core/services/servererrorinterceptor.service';
import { MainModule } from './main';
import { SharedModule } from './shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MainModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    NgxAgoraModule.forRoot({ AppID: environment.agora.appId }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    { provide: AuthService, useClass: Auth0CustomUIService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
