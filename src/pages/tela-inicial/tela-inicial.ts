import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the TelaInicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-inicial',
  templateUrl: 'tela-inicial.html',
})
export class TelaInicialPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaInicialPage');
  }

  abreLogin(): void {
    this.navCtrl.push('TelaLoginPage');
  }

  abreCadastro(): void {
    this.navCtrl.push('TelaCadastroPage');
  }

}
