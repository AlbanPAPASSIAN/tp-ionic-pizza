import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/public/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'detail-pizza/:id',
    loadChildren: () => import('./pages/public/detail-pizza/detail-pizza.module').then(m => m.DetailPizzaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
