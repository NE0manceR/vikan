import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { LoadClientComponent } from './load-client/load-client.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RawComponent } from './raw/raw.component';
import { ServiceComponent } from './service/service.component';
import { FaqComponent } from './faq/faq.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { ListDropdownModule, SearchModule } from '@carbon/icons-angular';
import { UIShellModule, DropdownModule, InputModule, AccordionModule, FileUploaderModule, NotificationModule, ButtonModule, BreadcrumbModule, DialogModule } from 'carbon-components-angular';

import { ShortFormComponent } from './short-form/short-form.component';
import { AcordingComponent } from './acording/acording.component';
import { ProductionCardComponent } from './production-card/production-card.component';
import { TypeCatalogComponent } from './catalog/type-catalog/type-catalog.component';
import { ItemCatalogComponent } from './catalog/item-catalog/item-catalog.component';
import { SmallSliderComponent } from './small-slider/small-slider.component';
import { TranslateModule } from '@ngx-translate/core';
import { SearchComponent } from './search/search.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { ProcessingComponent } from './processing/processing.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BigHomeSliderComponent } from './big-home-slider/big-home-slider.component';




@NgModule({
  declarations: [
    LoadClientComponent,
    HomeComponent,
    EnterpriseComponent,
    CatalogComponent,
    RawComponent,
    ServiceComponent,
    FaqComponent,
    ContactsComponent,
    ShortFormComponent,
    AcordingComponent,
    ProductionCardComponent,
    TypeCatalogComponent,
    ItemCatalogComponent,
    SmallSliderComponent,
    AcordingComponent,
    SearchComponent,
    BreadcrumbComponent,
    ProcessingComponent,
    BigHomeSliderComponent,


  ],
  imports: [
    CommonModule,
    LayoutModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UIShellModule,
    DropdownModule,
    ListDropdownModule,
    SearchModule,
    InputModule,
    AccordionModule,
    NotificationModule,
    ButtonModule,
    BreadcrumbModule,
    DialogModule,
    TranslateModule,
    Ng2PageScrollModule


  ],

})
export class ClientModule { }
