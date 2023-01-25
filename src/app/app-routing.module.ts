import { ContractChangeProcedureComponent } from './module/contract-change-procedure/contract-change-procedure.component';
import { UsageDetailsComponent } from './module/usage-details/usage-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { UsageStatusComponent } from './module/usage-status/usage-status.component';
import { LoginComponent } from './login/login.component';
import { CurrentContractDetailsComponent } from './module/current-contract-details/current-contract-details.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  }, {
    path:'login',component:LoginComponent
  }, {
    path: 'home', component: HomeComponent
  }, {
    path: 'usage-details', component: UsageDetailsComponent
  }, {
    path: 'usage-status', component: UsageStatusComponent
  }, {
    path: 'contract-change-procedure', component: ContractChangeProcedureComponent
  }, {
    path: 'current-contract-details', component: CurrentContractDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
