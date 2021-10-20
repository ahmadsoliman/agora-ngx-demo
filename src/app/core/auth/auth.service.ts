// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class AuthService {
  public abstract login(email: string, password: string): Observable<any>;

  public handleAuthentication(): void {}

  public setSession(authResult: any): void {}

  public logout(): void {}

  public abstract isAuthenticated(): boolean;

  public abstract renewToken(returnUrl?: string): void;
}
