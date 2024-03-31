import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shirt3Page } from './shirt3.page';

const routes: Routes = [
  {
    path: '',
    component: Shirt3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shirt3PageRoutingModule {}
