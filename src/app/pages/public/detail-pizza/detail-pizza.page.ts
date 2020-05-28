import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../../../_services/pizza.service';
import { BaseComponent } from '../../../_base/base.component';
import PizzaDto from '../../../_models/pizza.dto';
import { IngredientsService } from '../../../_services/ingredients.service';
import IngredientDto from '../../../_models/ingredient.dto';
import { CartService } from '../../../_services/cart.service';

@Component({
  selector: 'app-detail-pizza',
  templateUrl: './detail-pizza.page.html',
  styleUrls: ['./detail-pizza.page.scss'],
})
export class DetailPizzaPage extends BaseComponent implements OnInit {

  pizzaId: number;
  pizza: PizzaDto;
  ingredients: IngredientDto[];
  pizzaIngredients: IngredientDto[];

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private ingredientsService: IngredientsService,
    public cartService: CartService,
  ) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pizzaId = params.id;
      this.load();
    });
  }

  async load() {
    this.loading = true;

    this.pizza = await this.pizzaService.getOne(this.pizzaId).toPromise();
    this.ingredients = await this.ingredientsService.getAll().toPromise();
    if (this.pizza.ingredients) {
      this.pizzaIngredients = [];
      for (const item of this.pizza.ingredients) {
        this.pizzaIngredients.push(this.ingredients.find(x => x.id === item));
      }
    }

    this.loading = false;
  }
}
