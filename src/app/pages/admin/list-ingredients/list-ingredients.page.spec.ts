import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListIngredientsPage } from './list-ingredients.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderModule } from '../../../components/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { IngredientsService } from '../../../_services/ingredients.service';

describe('ListIngredientsPage', () => {
  let component: ListIngredientsPage;
  let fixture: ComponentFixture<ListIngredientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListIngredientsPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, HeaderModule, RouterTestingModule],
      providers: [IngredientsService],
    }).compileComponents();

    fixture = TestBed.createComponent(ListIngredientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
