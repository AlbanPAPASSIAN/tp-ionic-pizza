import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPizzaPage } from './list-pizza.page';

describe('ListPizzaPage', () => {
  let component: ListPizzaPage;
  let fixture: ComponentFixture<ListPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPizzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
