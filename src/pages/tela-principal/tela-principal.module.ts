import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaPrincipalPage } from './tela-principal';

@NgModule({
  declarations: [
    TelaPrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaPrincipalPage),
  ],
})
export class TelaPrincipalPageModule {}
