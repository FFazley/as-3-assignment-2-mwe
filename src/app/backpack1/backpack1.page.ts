import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-backpack1',
  templateUrl: './backpack1.page.html',
  styleUrls: ['./backpack1.page.scss'],
})
export class Backpack1Page implements OnInit {
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
      header: 'Success',
      message: 'Your item successfully added to cart.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
