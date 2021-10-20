import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, delay, retryWhen } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NotifyService } from '../common';

export const retryCount = 1;
export const retryWaitMilliSeconds = 1000;

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly notifier: NotifyService,
    private auth: AuthService,
    private router: Router
  ) {}

  // tslint:disable-next-line: no-any
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.auth.isAuthenticated()) {
      this.auth.renewToken(this.router.url);
    }
    const token = localStorage.getItem('access_token');
    const tenantId = localStorage.getItem('tenant_id');
    if (token) {
      request = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${token}`)
          .set('TenantId', `${tenantId}`)
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
          .set(
            'Access-Control-Allow-Headers',
            'Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
          ),
      });
    }
    if (request.method === 'POST' || request.method === 'PUT') {
      this.shiftDates(request.body);
    }

    return next.handle(request).pipe(
      retryWhen((error) =>
        error.pipe(
          concatMap((error, count) => {
            if (count < retryCount && error.status >= 500) {
              return of(error);
            }
            return throwError(error);
          }),
          delay(retryWaitMilliSeconds)
        )
      ),
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(error);
      })
    );
  }

  shiftDates(body: any) {
    if (body === null || body === undefined) {
      return body;
    }

    if (typeof body !== 'object') {
      return body;
    }

    for (const key of Object.keys(body)) {
      const value = body[key];
      if (value instanceof Date) {
        body[key] = new Date(
          Date.UTC(
            value.getFullYear(),
            value.getMonth(),
            value.getDate(),
            0,
            0,
            0
          )
        );
      } else if (typeof value === 'object') {
        this.shiftDates(value);
      }
    }
  }

  handleError(error: Error | HttpErrorResponse | { title: string }) {
    if (error instanceof HttpErrorResponse) {
      let message = 'Sorry, an Error occured!';
      if (error.error && error.error.message) {
        // Server Error
        message = error.error.message;
      } else {
        message = error.error.title;
      }
      this.notifier.showError(message);
    } else if (error instanceof Error) {
      // Client Error
      let message = error.message ? error.message : error.toString();
      if (!navigator.onLine) {
        message = 'No Internet Connection';
      }
      this.notifier.showError(message);
    } else {
      // API Error
      let message = error.title ? error.title : error.toString();
      this.notifier.showError(message);
    }

    console.error(error);
  }
}
