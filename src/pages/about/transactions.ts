import { Component } from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';
import {Tracker} from '../../app/Tracker';

export interface Transaction {
  amount: number;
  date: Date;
}

@Component({
  selector: 'page-about',
  templateUrl: 'transactions.html'
})

export class TransactionPage {
  private transactions: Transaction[] = [];
  private total: number = 0;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public tracker: Tracker) {

  }

  public addPopup() {
    let prompt = this.alertCtrl.create({
      title: 'Add New Transaction',
      message: 'Enter the amount:',
      inputs: [{ name: 'Amount',},],
      buttons: [{ text: 'Cancel', },
        {
          text: 'Save',
          handler: data => {
            this.add(Number(data.Amount));
          }
        }
      ]
    });
    prompt.present();
  }

  public getTotal() {
    return this.total;
  }

  private add(amount: number) {
    this.transactions.push({amount: amount, date: new Date()});
    this.total += amount;
    this.tracker.setTotal(this.total);
  }

}
