import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../_services/pizza.service';
import PizzaDto from '../_models/pizza.dto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pizza: PizzaDto[];

  constructor(
    private pizzaService: PizzaService,
  ) { }

  async ngOnInit() {
    this.load();
  }

  async load() {
    this.pizza = await this.pizzaService.getAll().toPromise();
  }


  async create() {
    await this.pizzaService.create({
      nom: 'test',
      photo: 'test-photo',
      prix: 1,
    }).toPromise();

    this.load();
  }

  async delete(id: number) {
    await this.pizzaService.delete(id).toPromise();

    this.load();
  }
}
