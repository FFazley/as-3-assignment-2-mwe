import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shirt5Page } from './shirt5.page';

const routes: Routes = [
  {
    path: '',
    component: Shirt5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shirt5PageRoutingModule {}
