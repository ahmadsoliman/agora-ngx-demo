import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

  constructor(public auth: AuthService, private router: Router) {

  }

  ngAfterViewInit() {
  }
}
