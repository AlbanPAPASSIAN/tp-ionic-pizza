import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPizzaPage } from './detail-pizza.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderModule } from '../../../components/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { IngredientsService } from '../../../_services/ingredients.service';
import { PizzaService } from '../../../_services/pizza.service';
import { FormsModule } from '@angular/forms';

describe('DetailPizzaPage', () => {
  let component: DetailPizzaPage;
  let fixture: ComponentFixture<DetailPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPizzaPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, HeaderModule, RouterTestingModule, FormsModule],
      providers: [IngredientsService, PizzaService],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
