import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Book5Page } from './book5.page';

const routes: Routes = [
  {
    path: '',
    component: Book5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Book5PageRoutingModule {}
