import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shirt4Page } from './shirt4.page';

const routes: Routes = [
  {
    path: '',
    component: Shirt4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shirt4PageRoutingModule {}
