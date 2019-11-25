import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";

 

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public InputDialogService: InputDialogServiceProvider, public socialSharing:SocialSharing ) {

  }

  loadItem() {
    return this.dataService.items;
  }

  removeItem(item, index) {
    console.log("Removing Item -", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    
    this.dataService.removeItem(index);
  }

  shareItem(item, index) {
    console.log("Sharing Item -", item, index);
    const toast = this.toastCtrl.create({
      message: 'Sharing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    let message = "Grocry Item - Name: " + item.name + "- Quantity: " + item.quantity; 
    let subject = "Shared via Groceries app";

    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Saved successfully!")
    }).catch((error) => {
      console.error("Error while sharing", error)
    });
    
  }

  editItem(item, index) {
    console.log("Editing Item -", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.InputDialogService.showPrompt(item, index);
  }


  addItem() {
    console.log("Adding an Item");
    this.InputDialogService.showPrompt();
  }

 


}
  