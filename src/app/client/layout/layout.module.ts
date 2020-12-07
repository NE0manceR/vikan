import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SearchModule, DropdownModule, ButtonModule, InputModule, ModalModule } from 'carbon-components-angular';
import { CallBtnComponent } from './call-btn/call-btn.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    CallBtnComponent, 
    MobileMenuComponent,],
  imports: [
    CommonModule,
    RouterModule,
    SearchModule,
    DropdownModule,
    ButtonModule,
    InputModule,
    ModalModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,

  ]
})
export class LayoutModule { }
