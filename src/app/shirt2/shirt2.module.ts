import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shirt2PageRoutingModule } from './shirt2-routing.module';

import { Shirt2Page } from './shirt2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shirt2PageRoutingModule
  ],
  declarations: [Shirt2Page]
})
export class Shirt2PageModule {}
