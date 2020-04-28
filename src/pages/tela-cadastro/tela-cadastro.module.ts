import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaCadastroPage } from './tela-cadastro';

@NgModule({
  declarations: [
    TelaCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaCadastroPage),
  ],
})
export class TelaCadastroPageModule {}
