import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaInicialPage } from './tela-inicial';

@NgModule({
  declarations: [
    TelaInicialPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaInicialPage),
  ],
})
export class TelaInicialPageModule {}
