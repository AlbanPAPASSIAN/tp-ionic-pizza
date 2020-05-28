import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PizzaDto from '../_models/pizza.dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  url = 'https://api.ynov.jcatania.io/pizza';

  constructor(
    private http: HttpClient,
  ) { }

  getOne(id: number): Observable<PizzaDto> {
    return this.http.get<PizzaDto>(this.url + '/' + id).pipe(
      map(value => {
        if (value) {
          return value;
        } else {
          throw new Error('Aucune pizza trouvée avec l\'id : "' + id + '"');
        }
      })
    );
  }

  getAll(): Observable<PizzaDto[]> {
    return this.http.get<PizzaDto[]>(this.url).pipe(
      map(value => {
        if (value && value.length > 0) {
          return value;
        } else {
          throw new Error('Aucune pizza trouvée');
        }
      })
    );
  }

  create(pizza: PizzaDto): Observable<PizzaDto> {
    return this.http.post<PizzaDto>(this.url, pizza).pipe(
      map(value => {
        if (value) {
          return value;
        } else {
          throw new Error('Erreur lors de la création de la pizza "' + pizza.id + '"');
        }
      })
    );
  }

  update(pizza: PizzaDto): Observable<PizzaDto> {
    return this.http.put<PizzaDto>(this.url + '/' + pizza.id, pizza).pipe(
      map(value => {
        if (value) {
          return value;
        } else {
          throw new Error('Erreur lors de la modification de la pizza "' + pizza.id + '"');
        }
      })
    );
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id).pipe(
      map(value => {
        if (value) {
          return value;
        } else {
          throw new Error('Erreur lors de la suppression de la pizza');
        }
      })
    );
  }
}
