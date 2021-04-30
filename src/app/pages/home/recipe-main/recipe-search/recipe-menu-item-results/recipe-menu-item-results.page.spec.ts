import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeMenuItemResultsPage } from './recipe-menu-item-results.page';

describe('RecipeMenuItemResultsPage', () => {
  let component: RecipeMenuItemResultsPage;
  let fixture: ComponentFixture<RecipeMenuItemResultsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMenuItemResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeMenuItemResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
