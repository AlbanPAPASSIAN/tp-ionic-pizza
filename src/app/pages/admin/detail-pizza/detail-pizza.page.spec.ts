import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPizzaPage } from './detail-pizza.page';

describe('DetailPizzaPage', () => {
  let component: DetailPizzaPage;
  let fixture: ComponentFixture<DetailPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPizzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
