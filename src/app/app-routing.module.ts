import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rent-page',
    loadChildren: () => import('./rent-page/rent-page.module').then( m => m.RentPagePageModule)
  },  {
    path: 'mycart',
    loadChildren: () => import('./mycart/mycart.module').then( m => m.MycartPageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'shirt',
    loadChildren: () => import('./shirt/shirt.module').then( m => m.ShirtPageModule)
  },
  {
    path: 'backpack',
    loadChildren: () => import('./backpack/backpack.module').then( m => m.BackpackPageModule)
  },
  {
    path: 'lanyard',
    loadChildren: () => import('./lanyard/lanyard.module').then( m => m.LanyardPageModule)
  },
  {
    path: 'book1',
    loadChildren: () => import('./book1/book1.module').then( m => m.Book1PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
