import { Routes } from '@angular/router';
import { LoadClientComponent } from './load-client/load-client.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { FaqComponent } from './faq/faq.component';
import { RawComponent } from './raw/raw.component';
import { ServiceComponent } from './service/service.component';
import { ItemCatalogComponent } from './catalog/item-catalog/item-catalog.component';
import { TypeCatalogComponent } from './catalog/type-catalog/type-catalog.component';
import { SearchComponent } from './search/search.component';

export const componentDeclarations: any[] = [];

export const providerDeclarations: any[] = [];

export const routes: Routes = [
  {
    path: '',
    component: LoadClientComponent,

    children: [
    
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'catalog', component: CatalogComponent, pathMatch: 'full' },
      { path: 'catalog/:type', component: TypeCatalogComponent, pathMatch: 'full' },
      { path: 'catalog/:type/:id', component: ItemCatalogComponent, pathMatch: 'full' },
      { path: 'contacts', component: ContactsComponent, pathMatch: 'full' },
      { path: 'enterprise', component: EnterpriseComponent, pathMatch: 'full' },
      { path: 'faq', component: FaqComponent, pathMatch: 'full' },
      { path: 'raw', component: RawComponent, pathMatch: 'full' },
      { path: 'service', component: ServiceComponent, pathMatch: 'full' },
      { path: 'search', component: SearchComponent, pathMatch: 'full' },
    ]
  }
];
