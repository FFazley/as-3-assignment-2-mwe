import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Backpack5PageRoutingModule } from './backpack5-routing.module';

import { Backpack5Page } from './backpack5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Backpack5PageRoutingModule
  ],
  declarations: [Backpack5Page]
})
export class Backpack5PageModule {}
