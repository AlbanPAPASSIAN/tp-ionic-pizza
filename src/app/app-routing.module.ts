import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/public/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'detail-pizza/:id',
    loadChildren: () => import('./pages/public/detail-pizza/detail-pizza.module').then(m => m.DetailPizzaPageModule)
  },
  {
    path: 'admin/list-pizza',
    loadChildren: () => import('./pages/admin/list-pizza/list-pizza.module').then(m => m.ListPizzaPageModule)
  },
  {
    path: 'admin/detail-pizza/:id',
    loadChildren: () => import('./pages/admin/detail-pizza/detail-pizza.module').then(m => m.DetailPizzaPageModule)
  },
  {
    path: 'admin/list-ingredients',
    loadChildren: () => import('./pages/admin/list-ingredients/list-ingredients.module').then(m => m.ListIngredientsPageModule)
  },
  {
    path: 'admin/detail-ingredient/:id',
    loadChildren: () => import('./pages/admin/detail-ingredient/detail-ingredient.module').then(m => m.DetailIngredientPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
