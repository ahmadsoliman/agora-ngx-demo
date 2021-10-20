import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loading = true;

  constructor(public auth: AuthService, private router: Router) {}

  ngAfterViewInit() {
    if (!this.auth.isAuthenticated()) {
      // this.auth.login();
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
