import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPizzaPage } from './list-pizza.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderModule } from '../../../components/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PizzaService } from '../../../_services/pizza.service';

describe('ListPizzaPage', () => {
  let component: ListPizzaPage;
  let fixture: ComponentFixture<ListPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPizzaPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, HeaderModule, RouterTestingModule],
      providers: [PizzaService]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
