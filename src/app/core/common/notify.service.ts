import { Injectable, ViewContainerRef } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class NotifyService {
  constructor(private notifierService: NotifierService) {
  }

  showSuccess(message: string) {
    this.notifierService.notify('success', message);
  }

  showError(message: string) {
    this.notifierService.notify('error', message);
  }

  showWarning(message: string) {
    this.notifierService.notify('warning', message);
  }

  showInfo(message: string) {
    this.notifierService.notify('info', message);
  }

  showDefault(message: string) {
    this.notifierService.notify('default', message);
  }

}
