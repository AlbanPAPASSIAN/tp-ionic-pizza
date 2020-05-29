import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailIngredientPage } from './detail-ingredient.page';
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
        component: DetailIngredientPage,
      }
    ]),
    HeaderModule,
    DeleteConfirmModule,
  ],
  declarations: [DetailIngredientPage]
})
export class DetailIngredientPageModule { }
