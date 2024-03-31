import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shirt4PageRoutingModule } from './shirt4-routing.module';

import { Shirt4Page } from './shirt4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shirt4PageRoutingModule
  ],
  declarations: [Shirt4Page]
})
export class Shirt4PageModule {}
