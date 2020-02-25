import { Routes } from '@angular/router';

import { MenuSelectionComponent } from './menu-selection/menu-selection.component';
import { MenuSelectionResolver } from './menu-selection/menu-selection.resolver';

export const routes: Routes = [
  {
    path: '',
    component: MenuSelectionComponent,
    resolve: {
      data: MenuSelectionResolver
    }
  }/*,
  {
    path: 'questions/about/:categorySlug',
    component: CategoryQuestionsComponent,
    resolve: {
      data: CategoryQuestionsResolver
    }
  },
  {
    path: 'question/:questionSlug',
    component: QuestionAnswersComponent,
    resolve: {
      data: QuestionAnswersResolver
    }
  }*/
];