import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterModule } from './components/register/register.module';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './components/login/login.module';
import { HomeModule } from './components/home/home.module';
import { ProductModule } from './components/product/product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RegisterModule,
    LoginModule,
    HomeModule,
    HttpClientModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
