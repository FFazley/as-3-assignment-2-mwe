import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shirt2Page } from './shirt2.page';

const routes: Routes = [
  {
    path: '',
    component: Shirt2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shirt2PageRoutingModule {}
