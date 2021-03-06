import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { PizzaService } from '../../../_services/pizza.service';
import { HeaderModule } from '../../../components/header/header.module';
import { CartService } from '../../../_services/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    HeaderModule,
  ],
  declarations: [HomePage],
  providers: [PizzaService, CartService],
})
export class HomePageModule { }
