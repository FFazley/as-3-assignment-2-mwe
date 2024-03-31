import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Book5PageRoutingModule } from './book5-routing.module';

import { Book5Page } from './book5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Book5PageRoutingModule
  ],
  declarations: [Book5Page]
})
export class Book5PageModule {}
