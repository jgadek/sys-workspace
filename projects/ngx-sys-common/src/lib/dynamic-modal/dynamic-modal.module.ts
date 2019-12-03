import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModalComponent } from './dynamic-modal.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [DynamicModalComponent],
  exports: [DynamicModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ]
})
export class DynamicModalModule { }
