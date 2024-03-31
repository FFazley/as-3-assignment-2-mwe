import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Backpack6PageRoutingModule } from './backpack6-routing.module';

import { Backpack6Page } from './backpack6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Backpack6PageRoutingModule
  ],
  declarations: [Backpack6Page]
})
export class Backpack6PageModule {}
