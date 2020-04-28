import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tela-login',
  templateUrl: 'tela-login.html',
})
export class TelaLoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaLoginPage');
  }

  chamaTabs(): void {
    this.navCtrl.setRoot('TabsPage');
  }

}
