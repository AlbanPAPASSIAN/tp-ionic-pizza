import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../../../_services/pizza.service';
import PizzaDto from '../../../_models/pizza.dto';
import { BaseComponent } from '../../../_base/base.component';
import IngredientDto from '../../../_models/ingredient.dto';
import { IngredientsService } from '../../../_services/ingredients.service';

@Component({
  selector: 'app-detail-pizza',
  templateUrl: './detail-pizza.page.html',
  styleUrls: ['./detail-pizza.page.scss'],
})
export class DetailPizzaPage extends BaseComponent implements OnInit {

  pizzaId;
  pizza: PizzaDto;
  title: string;
  ingredientsWrapper: { ingredient: IngredientDto, checked: boolean }[];
  photoUrl: string;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private ingredientsService: IngredientsService,
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

    if (this.pizzaId === 'new') {
      this.title = 'Ajout d\'une pizza';
      this.pizza = { nom: undefined, photo: undefined, prix: undefined, ingredients: [] };
    } else {
      this.title = 'Modification - ' + this.pizza.nom;
      this.pizza = await this.pizzaService.getOne(this.pizzaId).toPromise();
    }

    const ingredients = await this.ingredientsService.getAll().toPromise();

    this.ingredientsWrapper = [];
    for (const ingredient of ingredients) {
      this.ingredientsWrapper.push({ ingredient, checked: this.pizza.ingredients.findIndex(x => x === ingredient.id) !== -1 ? true : false });
    }

    this.loading = false;
  }

  async delete() {
    this.loading = true;

    await this.pizzaService.delete(this.pizza.id).toPromise();

    this.loading = false;
  }

  async save() {
    this.loading = true;

    this.pizza.ingredients = [];
    for (const item of this.ingredientsWrapper) {
      if (item.checked) {
        this.pizza.ingredients.push(item.ingredient.id);
      }
    }

    if (this.pizzaId === 'new') {
      await this.pizzaService.create(this.pizza).toPromise();
    } else {
      await this.pizzaService.update(this.pizza).toPromise();
    }

    this.loading = false;
  }
}
