import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Backpack4PageRoutingModule } from './backpack4-routing.module';

import { Backpack4Page } from './backpack4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Backpack4PageRoutingModule
  ],
  declarations: [Backpack4Page]
})
export class Backpack4PageModule {}
