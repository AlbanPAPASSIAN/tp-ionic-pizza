import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CartService', () => {
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});
