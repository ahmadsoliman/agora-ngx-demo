import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  constructor(public auth: AuthService, private router: Router) {

  }

  ngAfterViewInit() {
  }
}
