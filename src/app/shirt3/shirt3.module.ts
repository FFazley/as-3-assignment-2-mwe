import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shirt3PageRoutingModule } from './shirt3-routing.module';

import { Shirt3Page } from './shirt3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shirt3PageRoutingModule
  ],
  declarations: [Shirt3Page]
})
export class Shirt3PageModule {}
