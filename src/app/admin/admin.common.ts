import { Routes } from '@angular/router';
import { LoadAdminComponent } from './load-admin/load-admin.component';


import { AboutComponent } from './pages/about/about/about.component';

import { CatalogComponent } from './pages/catalog/catalog/catalog.component';

import { ContactComponent } from './pages/contact/contact/contact.component';

import { PopularQuestionComponent } from './pages/popularQuestions/popular-question/popular-question.component';

import { RawComponent } from './pages/raw/raw/raw.component';

import { ReversFormBigComponent } from './pages/reversFormBig/revers-form-big/revers-form-big.component';

import { ReversFormSmallComponent } from './pages/reversFormSmall/revers-form-small/revers-form-small.component';

import { ServiceTitleComponent } from './pages/serviceTitle/service-title/service-title.component';

import { ShreddersComponent } from './pages/shredders/shredders/shredders.component';

import { SortLineComponent } from './pages/sortline/sort-line/sort-line.component';

import { TechnicalCharacteristicsComponent } from './pages/technicalCharacteristics/technical-characteristics/technical-characteristics.component';

import { UsersComponent } from './pages/users/users/users.component';




export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '', component: LoadAdminComponent,
        children: [
          // about
          { path: 'about', component: AboutComponent, pathMatch: 'full', },
           //catalog
          { path: 'catalog', component: CatalogComponent, pathMatch: 'full', },
          //contact
          { path: 'contact', component: ContactComponent, pathMatch: 'full', },
           //questions
          { path: 'questions', component: PopularQuestionComponent, pathMatch: 'full', },
          // raw
          { path: 'raw', component: RawComponent, pathMatch: 'full', },
           //revers form big
          { path: 'bigform', component: ReversFormBigComponent, pathMatch: 'full', },
             //revers form small
          { path: 'smallform', component: ReversFormSmallComponent, pathMatch: 'full', },
            //service title
          { path: 'title', component: ServiceTitleComponent, pathMatch: 'full', },
             //shredders
          { path: 'shredders', component: ShreddersComponent, pathMatch: 'full', },
           // sort line
          { path: 'sortline', component: SortLineComponent, pathMatch: 'full', },
           // technical characteristics
          { path: 'models', component: TechnicalCharacteristicsComponent, pathMatch: 'full', },
           //users
          { path: 'users', component: UsersComponent, pathMatch: 'full', },

        ]
      }

];
