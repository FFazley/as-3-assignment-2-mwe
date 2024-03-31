import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shirt1PageRoutingModule } from './shirt1-routing.module';

import { Shirt1Page } from './shirt1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shirt1PageRoutingModule
  ],
  declarations: [Shirt1Page]
})
export class Shirt1PageModule {}
