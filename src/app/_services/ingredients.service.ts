import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import IngredientDto from '../_models/ingredient.dto';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  url = 'https://api.ynov.jcatania.io/ingredient';

  constructor(
    private http: HttpClient,
  ) { }

  getOne(id: number): Observable<IngredientDto> {
    return this.http.get<IngredientDto>(this.url + '/' + id).pipe(
      map(value => {
        if (value) {
          return value;
        } else {
          throw new Error('Aucune ingrédient trouvé avec l\'id : "' + id + '"');
        }
      })
    );
  }

  getAll(): Observable<IngredientDto[]> {
    return this.http.get<IngredientDto[]>(this.url).pipe(
      map(value => {
        if (value && value.length > 0) {
          return value;
        } else {
          throw new Error('Aucune ingrédient trouvé');
        }
      })
    );
  }

  // create(pizza: PizzaDto) {
  //   return this.http.post<PizzaDto>(this.url, pizza).pipe(
  //     map(value => {
  //       if (value) {
  //         return value;
  //       } else {
  //         throw new Error('Erreur lors de la création de la pizza "' + pizza.nom + '"');
  //       }
  //     })
  //   );
  // }

  // delete(id: number) {
  //   return this.http.delete(this.url + '/' + id).pipe(
  //     map(value => {
  //       if (value) {
  //         return value;
  //       } else {
  //         throw new Error('Erreur lors de la suppression de la pizza');
  //       }
  //     })
  //   );
  // }
}
