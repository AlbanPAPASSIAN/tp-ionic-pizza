import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailIngredientPage } from './detail-ingredient.page';

describe('DetailIngredientPage', () => {
  let component: DetailIngredientPage;
  let fixture: ComponentFixture<DetailIngredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailIngredientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
