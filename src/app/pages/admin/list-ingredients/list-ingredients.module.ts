import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListIngredientsPage } from './list-ingredients.page';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../../components/header/header.module';
import { DeleteConfirmModule } from '../../../components/delete-confirm/delete-confirm.module';

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
    DeleteConfirmModule,
  ],
  declarations: [ListIngredientsPage]
})
export class ListIngredientsPageModule { }
