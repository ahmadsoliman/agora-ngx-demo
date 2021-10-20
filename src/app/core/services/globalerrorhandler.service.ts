import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { NotifyService } from '../common';

// import { LoggingService } from './services/logging.service';
// import { TDNotificationService } from './notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    // Error handling is important and needs to be loaded first.
    // Because of this we should manually inject the services with Injector.
    constructor(private readonly injector: Injector) {}
    lastError: Error | HttpErrorResponse | null = null;
    lastErrorCount = 0;

    handleError(error: Error | HttpErrorResponse) {
        if (this.lastError && error.message === this.lastError.message) {
            this.lastErrorCount++;
            if (this.lastErrorCount > 3) {
                return;
            }
        } else {
            this.lastError = error;
            this.lastErrorCount = 0;
        }

        const notifier = this.injector.get<NotifyService>(NotifyService);

        if (error instanceof HttpErrorResponse) {
            // Server Error
            const message = error.message;
            notifier.showError(message);
        }
        // // add more error types
        // else if(error instanceof ) {

        // }
        else {
            // Client Error
            let message = error.message ? error.message : error.toString();
            if (!navigator.onLine) {
                message = 'No Internet Connection';
            }
            notifier.showError(message);
        }

        console.error(error);
    }
}
