import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Book4PageRoutingModule } from './book4-routing.module';

import { Book4Page } from './book4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Book4PageRoutingModule
  ],
  declarations: [Book4Page]
})
export class Book4PageModule {}
