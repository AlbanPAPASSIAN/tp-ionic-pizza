import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListIngredientsPage } from './list-ingredients.page';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListIngredientsPage,
      }
    ]),
    HeaderModule,
  ],
  declarations: [ListIngredientsPage]
})
export class ListIngredientsPageModule { }
