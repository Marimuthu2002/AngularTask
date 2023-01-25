import { HomeComponent } from './module/home/home.component';
import { PrimeModule } from './primeng/prime.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UsageDetailsComponent } from './module/usage-details/usage-details.component';
import { UsageStatusComponent } from './module/usage-status/usage-status.component';
import { ContractChangeProcedureComponent } from './module/contract-change-procedure/contract-change-procedure.component';
import { CurrentContractDetailsComponent } from './module/current-contract-details/current-contract-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LayoutComponent,
    UsageDetailsComponent,
    UsageStatusComponent,
    ContractChangeProcedureComponent,
    HomeComponent,
    CurrentContractDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     PrimeModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
