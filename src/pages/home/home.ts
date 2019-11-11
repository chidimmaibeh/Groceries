import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";

  items = [
    {
      name: "Eggs",
      quantity: 1
    },
    {
      name: "Bread",
      quantity: 2
    },
    {
      name: "Green Pepper",
      quantity: 3 
    },
    {
      name: "Carrot",
      quantity: 1
    },
    {
      name: "Apple",
      quantity: 9
    },
    {
      name: "Butter",
      quantity: 2
    },
    {
      name: "Onion",
      quantity: 5
    },
    {
      name: "Avocado",
      quantity: 4
    },
    {
      name: "Oatmeal",
      quantity: 2
    },
    {
      name: "Coconut",
      quantity: 3 
    },
    {
      name: "Rice",
      quantity: 1 
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index) {
    console.log("Removing Item -", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    
    this.items.splice(index, 1);
  }

  editItem(item, index) {
    console.log("Editing Item -", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.showEditItemPrompt(item, index);
  }


  addItem() {
    console.log("Adding an Item");
    this.showAddItemPrompt();
  }

  
  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
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
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

  showEditItemPrompt(item, index) {
    const prompt = this.alertCtrl.create({
      title: 'Edit Item',
      message: "Please edit item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item.qunatity
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
            this.items.push(item);
            this.items[index] = item; 
          }
        }
      ]
    });
    prompt.present();
  }



}
  