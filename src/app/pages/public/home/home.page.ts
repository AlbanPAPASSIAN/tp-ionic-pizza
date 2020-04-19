import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../../_services/pizza.service';
import PizzaDto from '../../../_models/pizza.dto';
import { ModalController } from '@ionic/angular';
import { CartComponent } from '../../../components/cart/cart.component';
import { BaseComponent } from '../../../_base/base.component';
import CartItemDto from '../../../_models/cart-item.dto';
import { CartService } from '../../../_services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BaseComponent implements OnInit {

  pizza: PizzaDto[];

  constructor(
    private pizzaService: PizzaService,
    public cartService: CartService,
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
  }
}
