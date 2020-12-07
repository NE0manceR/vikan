import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
// import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
// import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
// import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from './services/admin-services/user.service';
import { LoginComponent } from './common/login/login.component';
import { FeedbackModalComponent } from './common/feedback-modal/feedback-modal.component';
import { MaterialModule } from './common/material/material.module';
import { UIShellModule, DropdownModule, InputModule, AccordionModule, FileUploaderModule, NotificationModule, ButtonModule, BreadcrumbModule, DialogModule } from 'carbon-components-angular';
import { ViewUsersComponent } from './admin/pages/users/view-users/view-users.component';
import { AddAboutComponent } from './admin/pages/about/add-about/add-about.component';
import { ViewAboutComponent } from './admin/pages/about/view-about/view-about.component';
import { AddCatalogComponent } from './admin/pages/catalog/add-catalog/add-catalog.component';
import { ViewCatalogComponent } from './admin/pages/catalog/view-catalog/view-catalog.component';
import { AddContactComponent } from './admin/pages/contact/add-contact/add-contact.component';
import { ViewContactComponent } from './admin/pages/contact/view-contact/view-contact.component';
import { AddPopularQuestionComponent } from './admin/pages/popularQuestions/add-popular-question/add-popular-question.component';
import { ViewPopularQuestionComponent } from './admin/pages/popularQuestions/view-popular-question/view-popular-question.component';
import { AddRawComponent } from './admin/pages/raw/add-raw/add-raw.component';
import { ViewRawComponent } from './admin/pages/raw/view-raw/view-raw.component';
import { AddReversFormBigComponent } from './admin/pages/reversFormBig/add-revers-form-big/add-revers-form-big.component';
import { ViewReversFormBigComponent } from './admin/pages/reversFormBig/view-revers-form-big/view-revers-form-big.component';
import { AddReversFormSmallComponent } from './admin/pages/reversFormSmall/add-revers-form-small/add-revers-form-small.component';
import { ViewReversFormSmallComponent } from './admin/pages/reversFormSmall/view-revers-form-small/view-revers-form-small.component';
import { AddServiceTitleComponent } from './admin/pages/serviceTitle/add-service-title/add-service-title.component';
import { ViewServiceTitleComponent } from './admin/pages/serviceTitle/view-service-title/view-service-title.component';
import { AddShreddersComponent } from './admin/pages/shredders/add-shredders/add-shredders.component';
import { ViewShreddersComponent } from './admin/pages/shredders/view-shredders/view-shredders.component';
import { AddSortLineComponent } from './admin/pages/sortline/add-sort-line/add-sort-line.component';
import { ViewSortLineComponent } from './admin/pages/sortline/view-sort-line/view-sort-line.component';
import { AddTechnicalCharacteristicsComponent } from './admin/pages/technicalCharacteristics/add-technical-characteristics/add-technical-characteristics.component';
import { ViewTechnicalCharacteristicsComponent } from './admin/pages/technicalCharacteristics/view-technical-characteristics/view-technical-characteristics.component';
import { AddUsersComponent } from './admin/pages/users/add-users/add-users.component';
import { AboutService } from './services/admin-services/about.service';
import { CatalogService } from './services/admin-services/catalog.service';
import { ContactService } from './services/admin-services/contact.service';
import { QuestionsService } from './services/admin-services/questions.service';
import { RawService } from './services/admin-services/raw.service';
import { ReversFormBigService } from './services/admin-services/reversFormBig';
import { ServiceTitleService } from './services/admin-services/serviceTitle.service';
import { SortingLineService } from './services/admin-services/sortingLine.service';
import { SreddersService } from './services/admin-services/sredders.service';
import { TechnicalCharacteristicsService } from './services/admin-services/technicalCharacteristics.service';
import { UploadFileService } from './services/admin-services/upload-file.service';
import { AboutComponent } from './admin/pages/about/about/about.component';
import { ReversFormSmallService } from './services/admin-services/reversFormSmall';
import { MailSendService } from './services/client-services/mail-send.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SearchService } from './services/admin-services/search.service';
//import { ModalWindowComponent } from './client/modal-window/modal-window.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
		AppComponent,
		LoginComponent,
    FeedbackModalComponent,
  
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ClientModule,
    HttpClientModule,
		BrowserAnimationsModule,
		FormsModule,
		UIShellModule, DropdownModule, InputModule, AccordionModule, FileUploaderModule, NotificationModule, ButtonModule, BreadcrumbModule, DialogModule,
    MaterialModule,
    TranslateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    })

  ],
  providers: [
    httpInterceptorProviders,
    HttpClientModule,
    UserService,
    AboutService,
    CatalogService,
    ContactService,
    QuestionsService,
    RawService,
    ReversFormBigService,
    ReversFormSmallService,
    ServiceTitleService,
    SortingLineService,
    SreddersService,
    TechnicalCharacteristicsService,
    UploadFileService,
    MailSendService,
    SearchService,
  


  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    FeedbackModalComponent,

    AddAboutComponent, ViewAboutComponent,

    AddCatalogComponent,ViewCatalogComponent,

    AddContactComponent, ViewContactComponent,

    AddPopularQuestionComponent, ViewPopularQuestionComponent,

    AddRawComponent, ViewRawComponent,

    AddReversFormBigComponent, ViewReversFormBigComponent,

    AddReversFormSmallComponent, ViewReversFormSmallComponent,

    AddServiceTitleComponent, ViewServiceTitleComponent, 

    AddShreddersComponent, ViewShreddersComponent,

    AddSortLineComponent, ViewSortLineComponent,

    AddTechnicalCharacteristicsComponent, ViewTechnicalCharacteristicsComponent,

    AddUsersComponent, ViewUsersComponent
    
  ]})
export class AppModule { }
