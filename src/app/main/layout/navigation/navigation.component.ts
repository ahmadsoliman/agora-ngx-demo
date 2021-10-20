import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { menuItems, navItems } from '@app/core/layout/navigation';


@Component({
  selector: 'main-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  public menuItemList = menuItems;
  public navItems = navItems;
  constructor(
    private _router: Router,
  ) {
  }

  ngOnInit() {
  }

  goto(path: string) {
    this._router.navigate([path]);
  }
}
