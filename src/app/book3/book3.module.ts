import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Book3PageRoutingModule } from './book3-routing.module';

import { Book3Page } from './book3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Book3PageRoutingModule
  ],
  declarations: [Book3Page]
})
export class Book3PageModule {}
