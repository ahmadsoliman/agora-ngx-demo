import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/core';
import { navItems } from '@app/core/layout/navigation';
import { NavItem } from '@app/core/layout/nav-item';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  navItems: NavItem[] = navItems;
  
  constructor(
    public auth: AuthService
  ) { }

  showSettings = false;
  openSettings(){
    
    this.showSettings = true;
  }

  closed(value: any){
    
    this.showSettings = false;
  }
  saved(value: any){
    
    this.showSettings = false;
    alert("Settings are saved");
  }


  showApps = false;
  openApps(){
    
    this.showApps = true;
  }

  appClosed(value: any){
    
    this.showApps = false;
  }
  appSaved(value: any){
    
    this.showApps = false;
    alert("Apps are saved");
  }
}
