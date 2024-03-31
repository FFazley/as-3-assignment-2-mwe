import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shirt5PageRoutingModule } from './shirt5-routing.module';

import { Shirt5Page } from './shirt5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shirt5PageRoutingModule
  ],
  declarations: [Shirt5Page]
})
export class Shirt5PageModule {}
