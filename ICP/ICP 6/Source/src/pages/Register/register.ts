// @ts-ignore
import { Component,viewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {createElementCssSelector} from "@angular/compiler";
// @ts-ignore
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-Register',
  templateUrl: 'register.html'
})
export class Register {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
 
  }
  logout(){
    this.navCtrl.push(HomePage);
  }
}
