import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Backpack2PageRoutingModule } from './backpack2-routing.module';

import { Backpack2Page } from './backpack2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Backpack2PageRoutingModule
  ],
  declarations: [Backpack2Page]
})
export class Backpack2PageModule {}
