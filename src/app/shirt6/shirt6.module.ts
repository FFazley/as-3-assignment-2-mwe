import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shirt6PageRoutingModule } from './shirt6-routing.module';

import { Shirt6Page } from './shirt6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shirt6PageRoutingModule
  ],
  declarations: [Shirt6Page]
})
export class Shirt6PageModule {}
