import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import { CustomBootstrapModule } from './bootstrap/custom.bootstrap.module';
import { CallbackComponent } from './components/callback/callback.component';
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [CallbackComponent, EmptyComponent],
  imports: [
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // CustomBootstrapModule,
  ],
  exports: [
    // CustomBootstrapModule,
    EmptyComponent,
  ],
  providers: [CurrencyPipe, DatePipe],
})
export class SharedModule {}
