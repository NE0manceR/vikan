import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about/about.component';
import { AddAboutComponent } from './pages/about/add-about/add-about.component';
import { ViewAboutComponent } from './pages/about/view-about/view-about.component';
import { CatalogComponent } from './pages/catalog/catalog/catalog.component';
import { AddCatalogComponent } from './pages/catalog/add-catalog/add-catalog.component';
import { ViewCatalogComponent } from './pages/catalog/view-catalog/view-catalog.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { AddContactComponent } from './pages/contact/add-contact/add-contact.component';
import { ViewContactComponent } from './pages/contact/view-contact/view-contact.component';
import { PopularQuestionComponent } from './pages/popularQuestions/popular-question/popular-question.component';
import { AddPopularQuestionComponent } from './pages/popularQuestions/add-popular-question/add-popular-question.component';
import { ViewPopularQuestionComponent } from './pages/popularQuestions/view-popular-question/view-popular-question.component';
import { RawComponent } from './pages/raw/raw/raw.component';
import { AddRawComponent } from './pages/raw/add-raw/add-raw.component';
import { ViewRawComponent } from './pages/raw/view-raw/view-raw.component';
import { ReversFormBigComponent } from './pages/reversFormBig/revers-form-big/revers-form-big.component';
import { AddReversFormBigComponent } from './pages/reversFormBig/add-revers-form-big/add-revers-form-big.component';
import { ViewReversFormBigComponent } from './pages/reversFormBig/view-revers-form-big/view-revers-form-big.component';
import { ReversFormSmallComponent } from './pages/reversFormSmall/revers-form-small/revers-form-small.component';
import { AddReversFormSmallComponent } from './pages/reversFormSmall/add-revers-form-small/add-revers-form-small.component';
import { ViewReversFormSmallComponent } from './pages/reversFormSmall/view-revers-form-small/view-revers-form-small.component';
import { ServiceTitleComponent } from './pages/serviceTitle/service-title/service-title.component';
import { AddServiceTitleComponent } from './pages/serviceTitle/add-service-title/add-service-title.component';
import { ViewServiceTitleComponent } from './pages/serviceTitle/view-service-title/view-service-title.component';
import { ShreddersComponent } from './pages/shredders/shredders/shredders.component';
import { AddShreddersComponent } from './pages/shredders/add-shredders/add-shredders.component';
import { ViewShreddersComponent } from './pages/shredders/view-shredders/view-shredders.component';
import { SortLineComponent } from './pages/sortline/sort-line/sort-line.component';
import { AddSortLineComponent } from './pages/sortline/add-sort-line/add-sort-line.component';
import { ViewSortLineComponent } from './pages/sortline/view-sort-line/view-sort-line.component';
import { TechnicalCharacteristicsComponent } from './pages/technicalCharacteristics/technical-characteristics/technical-characteristics.component';
import { AddTechnicalCharacteristicsComponent } from './pages/technicalCharacteristics/add-technical-characteristics/add-technical-characteristics.component';
import { ViewTechnicalCharacteristicsComponent } from './pages/technicalCharacteristics/view-technical-characteristics/view-technical-characteristics.component';
import { UsersComponent } from './pages/users/users/users.component';
import { AddUsersComponent } from './pages/users/add-users/add-users.component';
import { ViewUsersComponent } from './pages/users/view-users/view-users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadAdminComponent } from './load-admin/load-admin.component';
import { MaterialModule } from './material.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    LoadAdminComponent, 
    AboutComponent,
    AddAboutComponent, 
    ViewAboutComponent,
    CatalogComponent, 
    AddCatalogComponent, 
    ViewCatalogComponent,
    ContactComponent, 
    AddContactComponent, 
    ViewContactComponent,
    PopularQuestionComponent,
    AddPopularQuestionComponent, 
    ViewPopularQuestionComponent,
    RawComponent, 
    AddRawComponent, 
    ViewRawComponent,
    ReversFormBigComponent, 
    AddReversFormBigComponent, 
    ViewReversFormBigComponent,
    ReversFormSmallComponent, 
    AddReversFormSmallComponent, 
    ViewReversFormSmallComponent,
    ServiceTitleComponent, 
    AddServiceTitleComponent, 
    ViewServiceTitleComponent,
    ShreddersComponent, 
    AddShreddersComponent, 
    ViewShreddersComponent,
    SortLineComponent, 
    AddSortLineComponent, 
    ViewSortLineComponent,
    TechnicalCharacteristicsComponent, 
    AddTechnicalCharacteristicsComponent, 
    ViewTechnicalCharacteristicsComponent,
    UsersComponent, 
    AddUsersComponent, 
    ViewUsersComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AdminRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
