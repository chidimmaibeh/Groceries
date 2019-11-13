
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular'
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }


  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item' : 'Add Item',
      message: item ? "Please edit item..." : "Please enter item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.qunatity : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index != undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);

            }
          }
        }
      ]
    });
    prompt.present();
  }


}
