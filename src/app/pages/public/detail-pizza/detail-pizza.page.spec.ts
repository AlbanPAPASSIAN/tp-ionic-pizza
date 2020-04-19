import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPizzaPage } from './detail-pizza.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PizzaService } from '../../../_services/pizza.service';
import { CartService } from '../../../_services/cart.service';
import { HeaderModule } from '../../../components/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailPizzaPage', () => {
  let component: DetailPizzaPage;
  let fixture: ComponentFixture<DetailPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPizzaPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, HeaderModule, RouterTestingModule],
      providers: [PizzaService, CartService],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
