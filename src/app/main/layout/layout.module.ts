import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    CoreModule,
  ],
  declarations: [
    HeaderComponent,
    NavigationComponent,
    MainLayoutComponent,
    FooterComponent,
    NavBarComponent,
    SideBarComponent
  ],
  exports: [
  ],
  providers: []
})
export class LayoutModule {

}
