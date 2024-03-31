import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shirt6Page } from './shirt6.page';

const routes: Routes = [
  {
    path: '',
    component: Shirt6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shirt6PageRoutingModule {}
