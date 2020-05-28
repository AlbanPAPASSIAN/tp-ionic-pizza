import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailIngredientPage } from './detail-ingredient.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderModule } from '../../../components/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { IngredientsService } from '../../../_services/ingredients.service';
import { FormsModule } from '@angular/forms';

describe('DetailIngredientPage', () => {
  let component: DetailIngredientPage;
  let fixture: ComponentFixture<DetailIngredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailIngredientPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, HeaderModule, RouterTestingModule, FormsModule],
      providers: [IngredientsService],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
