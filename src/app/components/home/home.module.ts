import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './shared/home.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  imports: [CommonModule, ProductModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
