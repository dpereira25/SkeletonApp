import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginExitosoPageRoutingModule } from './login-exitoso-routing.module';

import { LoginExitosoPage } from './login-exitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginExitosoPageRoutingModule
  ],
  declarations: [LoginExitosoPage]
})
export class LoginExitosoPageModule {}
