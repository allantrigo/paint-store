import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './shared/product.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductComponent],
  exports: [ProductComponent],
})
export class ProductModule {}
