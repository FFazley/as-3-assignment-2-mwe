import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Backpack3PageRoutingModule } from './backpack3-routing.module';

import { Backpack3Page } from './backpack3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Backpack3PageRoutingModule
  ],
  declarations: [Backpack3Page]
})
export class Backpack3PageModule {}
