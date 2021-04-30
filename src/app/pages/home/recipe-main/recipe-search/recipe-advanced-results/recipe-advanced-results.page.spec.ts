import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeAdvancedResultsPage } from './recipe-advanced-results.page';

describe('RecipeAdvancedResultsPage', () => {
  let component: RecipeAdvancedResultsPage;
  let fixture: ComponentFixture<RecipeAdvancedResultsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeAdvancedResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeAdvancedResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
