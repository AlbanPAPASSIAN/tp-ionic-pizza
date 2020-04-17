import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../../_services/pizza.service';
import PizzaDto from '../../../_models/pizza.dto';
import { ModalController } from '@ionic/angular';
import { CartComponent } from '../../../components/cart/cart.component';
import { BaseComponent } from '../../../_base/base.component';
import CartItemDto from '../../../_models/cart-item.dto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BaseComponent implements OnInit {

  pizza: PizzaDto[];
  cart: CartItemDto[];

  constructor(
    private pizzaService: PizzaService,
    public modalController: ModalController,
  ) {
    super();
  }

  async ngOnInit() {
    this.loading = true;

    await this.load();

    this.loading = false;
  }

  async load() {
    this.pizza = await this.pizzaService.getAll().toPromise();
    this.cart = this.getCart();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CartComponent,
      swipeToClose: true,
    });
    modal.present();

    await modal.onWillDismiss();
    this.load();
  }
}
