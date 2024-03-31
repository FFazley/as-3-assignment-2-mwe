import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Backpack1PageRoutingModule } from './backpack1-routing.module';

import { Backpack1Page } from './backpack1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Backpack1PageRoutingModule
  ],
  declarations: [Backpack1Page]
})
export class Backpack1PageModule {}
