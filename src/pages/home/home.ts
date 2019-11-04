import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  removeItem(item) {
    console.log("Removing Item -", item);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 3000
    });
    toast.present();
  }

}
