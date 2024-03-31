import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Book4Page } from './book4.page';

const routes: Routes = [
  {
    path: '',
    component: Book4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Book4PageRoutingModule {}
