import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lanyard6Page } from './lanyard6.page';

const routes: Routes = [
  {
    path: '',
    component: Lanyard6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lanyard6PageRoutingModule {}
