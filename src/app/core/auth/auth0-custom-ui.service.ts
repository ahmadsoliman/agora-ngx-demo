// src/app/auth/auth.service.ts
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { WebAuth } from 'auth0-js';
import { Observable } from 'rxjs';
import { AuthService } from '..';
import { AuthToken, UserInfo } from '../models/user.model';
import { Auth0Config } from './auth0.config';
import { map } from 'rxjs/operators';

@Injectable()
export class Auth0CustomUIService extends AuthService {
  auth0 = new WebAuth({
    clientID: Auth0Config.clientID,
    domain: Auth0Config.domain,
    responseType: Auth0Config.responseType,
    redirectUri: Auth0Config.redirectUri,
    scope: Auth0Config.scope,
    audience: Auth0Config.audience,
  });

  constructor(public router: Router, private ngZone: NgZone) {
    super();
  }

  // tslint:disable-next-line
  public login(email: string, password: string): Observable<any> {
    return new Observable((observer) =>
      this.auth0.login(
        {
          realm: Auth0Config.authConnectionType,
          email,
          password,
        },
        // tslint:disable-next-line: no-any
        (err: any, result: any) => {
          if (err) {
            return observer.error(new Error(err.description));
          }
          observer.next(result);
        }
      )
    );
  }

  // tslint:disable-next-line
  public forgetPassword(email: string): Observable<any> {
    return new Observable((observer) =>
      this.auth0.changePassword(
        {
          connection: Auth0Config.authConnectionType,
          email,
        },
        // tslint:disable-next-line: no-any
        (err: any, result: any) => {
          if (err) {
            return observer.error(new Error(err.description));
          }
          observer.next(result);
        }
      )
    );
  }

  // Call this method in app.component.ts
  // if using path-based routing
  public handleAuthentication(): void {}

  // Call this method in app.component.ts
  // if using hash-based routing
  public handleAuthenticationWithHash(): void {}

  public setSession(authResult: AuthToken): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('tenant_id', authResult.tenantId);
    localStorage.setItem('tenant_user_id', authResult.tenantUserId);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('selected_tenant');
    localStorage.removeItem('tenant_id');
    localStorage.removeItem('tenant_user_id');
    localStorage.removeItem('remember_me');
    localStorage.removeItem('user_info');

    // Go back to the login route
    this.ngZone.run(() => this.router.navigate(['/login']));
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') as string);
    return new Date().getTime() < expiresAt;
  }

  public isVerified(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const userInfo = JSON.parse(localStorage.getItem('user_info') as string);
    return userInfo ? userInfo.email_verified : false;
  }

  // tslint:disable-next-line: no-any
  public register(data: any): Observable<any> {
    return new Observable((observer) =>
      this.auth0.signup(
        {
          connection: Auth0Config.authConnectionType,
          email: data.email,
          password: data.password,
          // user_metadata: data,
        },
        // tslint:disable-next-line: no-any
        (err: any, result: any) => {
          if (err) {
            return observer.error(new Error(err.description));
          }
          observer.next(result);
        }
      )
    );
  }

  // tslint:disable-next-line: no-any
  public resendActivation(): Observable<any> {
    return new Observable((observer) =>
      this.auth0.signup(
        {
          connection: 'Username-Password-Authentication',
          email: 'email',
          password: 'password',
        },
        // tslint:disable-next-line: no-any
        (err: any, result: any) => {
          if (err) {
            return observer.error(new Error(err.description));
          }
          observer.next(result);
        }
      )
    );
  }

  // tslint:disable-next-line: no-any
  private getUserInfo(authResult: any): Observable<UserInfo> {
    return new Observable((observer) =>
      this.auth0.client.userInfo(
        authResult.accessToken,
        // tslint:disable-next-line: no-any
        (err: any, user: any) => {
          if (err) {
            return observer.error(new Error(err.description));
          }
          observer.next(user);
        }
      )
    );
  }

  public userloggedIn(authResult: AuthToken): Observable<void> {
    this.setSession(authResult);
    return this.getUserInfo(authResult).pipe(
      map((userInfo: UserInfo) => {
        this.saveUserInfo(userInfo);
      })
    );
  }

  public saveUserInfo(userInfo: UserInfo) {
    localStorage.setItem('user_info', JSON.stringify(userInfo));
  }

  public requiresLogin(): boolean {
    const requiresLogin = localStorage.getItem('requires_login') as string;
    return requiresLogin === 'true';
  }

  public isRememberMe(): boolean {
    const requiresLogin = localStorage.getItem('remember_me') as string;
    return requiresLogin === 'true';
  }

  public renewToken(returnUrl?: string) {
    if (!this.requiresLogin() && this.isRememberMe()) {
      this.auth0.renewAuth({}, (err: any, authToken: AuthToken) => {
        if (err || !authToken) {
          return;
        }
        this.setSession(authToken);
        this.ngZone.run(() => this.router.navigate([returnUrl]));
      });
    } else {
      this.ngZone.run(() =>
        this.router.navigate(['/login'], { queryParams: { returnUrl } })
      );
    }
  }
}
