import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Book6PageRoutingModule } from './book6-routing.module';

import { Book6Page } from './book6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Book6PageRoutingModule
  ],
  declarations: [Book6Page]
})
export class Book6PageModule {}
