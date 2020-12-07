import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
   
    RouterModule,
    MatExpansionModule,
    TranslateModule
  ],
  exports: [
    
    CommonModule, ApplicationModule
  ]
})
export class LayoutModule { }
