import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rent-page',
  templateUrl: './rent-page.page.html',
  styleUrls: ['./rent-page.page.scss'],
})
export class RentPagePage implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
  }

  public actionSheetButtons = [
    {
      text: 'Confirm',
      role: 'Confirm',
      data: {
        action: 'Confirm',
      },
      handler: () => {
        this.showRentSuccessAlert();
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  async showRentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Rent Success',
      message: 'You have successfully rented the cube.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
