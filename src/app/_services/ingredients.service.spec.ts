import { TestBed } from '@angular/core/testing';
import { IngredientsService } from './ingredients.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('IngredientsService', () => {

  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: IngredientsService = TestBed.get(IngredientsService);
    expect(service).toBeTruthy();
  });
});
