import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPizzaPage } from './detail-pizza.page';
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
        component: DetailPizzaPage,
      }
    ]),
    HeaderModule,
  ],
  declarations: [DetailPizzaPage]
})
export class DetailPizzaPageModule { }
