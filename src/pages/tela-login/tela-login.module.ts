import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaLoginPage } from './tela-login';

@NgModule({
  declarations: [
    TelaLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaLoginPage),
  ],
})
export class TelaLoginPageModule {}
