import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginExitosoPage } from './login-exitoso.page';

const routes: Routes = [
  {
    path: '',
    component: LoginExitosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginExitosoPageRoutingModule {}
