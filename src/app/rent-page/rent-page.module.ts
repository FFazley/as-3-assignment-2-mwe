import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentPagePageRoutingModule } from './rent-page-routing.module';

import { RentPagePage } from './rent-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentPagePageRoutingModule
  ],
  declarations: [RentPagePage]
})
export class RentPagePageModule {}
