import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanyardPage } from './lanyard.page';

const routes: Routes = [
  {
    path: '',
    component: LanyardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanyardPageRoutingModule {}
