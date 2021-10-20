import { NavItem } from './../../../core/layout/nav-item';
import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() public navItems: NavItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
