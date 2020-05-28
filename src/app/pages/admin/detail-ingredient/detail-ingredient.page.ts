import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../_base/base.component';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../../../_services/ingredients.service';
import IngredientDto from '../../../_models/ingredient.dto';

@Component({
  selector: 'app-detail-ingredient',
  templateUrl: './detail-ingredient.page.html',
  styleUrls: ['./detail-ingredient.page.scss'],
})
export class DetailIngredientPage extends BaseComponent implements OnInit {

  ingredientId;
  ingredient: IngredientDto;
  title: string;

  constructor(
    private route: ActivatedRoute,
    private ingredientsService: IngredientsService,
  ) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ingredientId = params.id;
      this.load();
    });
  }

  async load() {
    this.loading = true;

    if (this.ingredientId === 'new') {
      this.title = 'Ajout d\'un ingrédient';
      this.ingredient = { nom: undefined };
    } else {
      this.title = 'Modification - ' + this.ingredient.nom;
      this.ingredient = await this.ingredientsService.getOne(this.ingredientId).toPromise();
    }

    this.loading = false;
  }

  async delete() {
    this.loading = true;

    await this.ingredientsService.delete(this.ingredient.id).toPromise();

    this.loading = false;
  }

  async save() {
    this.loading = true;

    if (!this.ingredient.nom) {
      console.log('Veuillez saisir un nom');
    }

    if (this.ingredientId === 'new') {
      await this.ingredientsService.create(this.ingredient).toPromise();
    } else {
      await this.ingredientsService.update(this.ingredient).toPromise();
    }

    this.loading = false;
  }

}
