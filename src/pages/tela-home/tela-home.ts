import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tela-home',
  templateUrl: 'tela-home.html',
})
export class TelaHomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaHomePage');
  }


}
