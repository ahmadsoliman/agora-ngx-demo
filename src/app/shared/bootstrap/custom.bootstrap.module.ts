import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [ButtonsModule, ModalModule.forRoot(), BsDropdownModule.forRoot()],
  exports: [ButtonsModule, ModalModule, BsDropdownModule]
})
export class CustomBootstrapModule { }


