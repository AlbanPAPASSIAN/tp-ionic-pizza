import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../../_services/pizza.service';
import PizzaDto from '../../../_models/pizza.dto';
import { ModalController } from '@ionic/angular';
import { CartComponent } from '../../../components/cart/cart.component';
import { BasePageComponent } from '../../base/base-page.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BasePageComponent implements OnInit {

  pizza: PizzaDto[];

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
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CartComponent,
      swipeToClose: true,
    });
    return await modal.present();
  }

  async doRefresh(event: any) {
    await this.load();
    event.target.complete();
  }
}
