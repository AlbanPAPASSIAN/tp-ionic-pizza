import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../_base/base.component';
import IngredientDto from '../../../_models/ingredient.dto';
import { IngredientsService } from '../../../_services/ingredients.service';

@Component({
  selector: 'app-list-ingredients',
  templateUrl: './list-ingredients.page.html',
  styleUrls: ['./list-ingredients.page.scss'],
})
export class ListIngredientsPage extends BaseComponent implements OnInit {

  ingredients: IngredientDto[];

  constructor(
    private ingredientsService: IngredientsService,
  ) {
    super();
  }

  ngOnInit() {
    this.load();
  }

  async load() {
    this.loading = true;

    this.ingredients = await this.ingredientsService.getAll().toPromise();

    this.loading = false;
  }

  loadData(event) {
    setTimeout((data) => {
      event.target.complete();
      event.target.disabled = true;
    }, 500);
  }

  async delete(ingredient: IngredientDto) {
    this.loading = true;

    await this.ingredientsService.delete(ingredient.id).toPromise();
    this.load();

    this.loading = false;
  }

}
