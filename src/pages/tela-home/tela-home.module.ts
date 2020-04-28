import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaHomePage } from './tela-home';

@NgModule({
  declarations: [
    TelaHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TelaHomePage),
  ],
})
export class TelaHomePageModule {}
