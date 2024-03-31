import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Book3Page } from './book3.page';

const routes: Routes = [
  {
    path: '',
    component: Book3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Book3PageRoutingModule {}
