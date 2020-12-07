import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { environment } from '../../../../../environments/environment';
import { About } from '../../../../models/admin-models/model.about';
import { AboutService } from '../../../../services/admin-services/about.service';
@Component({
  selector: 'app-view-about',
  templateUrl: './view-about.component.html',
  styleUrls: ['./view-about.component.scss'],
  //providers: [AboutService]
})
export class ViewAboutComponent implements OnInit {


  myForm: FormGroup;
  numberPhoto1;
  numberPhoto2;
  factsPhoto1;
  factsPhoto2;
  urlToServer = "";
  showBlock;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewAboutComponent>,
    public dataService: AboutService
  ) {}

  ngOnInit(): void {
    this.reactiveForm(this.data.about);
    this.urlToServer = environment.url;
  }
  reactiveForm(about) {
    this.myForm = new FormGroup({
      //id: new FormControl(about.id),
      ua_title: new FormControl(about.ua_title),
      eng_title: new FormControl(about.eng_title),
      rus_title: new FormControl(about.rus_title),

      ua_main_title_number: new FormControl(about.ua_main_title_number),
      eng_main_title_number: new FormControl(about.eng_main_title_number),
      rus_main_title_number: new FormControl(about.rus_main_title_number),

      ua_main_text_number: new FormControl(about.ua_main_text_number),
      eng_main_text_number: new FormControl(about.eng_main_text_number),
      rus_main_text_number: new FormControl(about.rus_main_text_number),

      ua_main_title_fact: new FormControl(about.ua_main_title_fact),
      eng_main_title_fact: new FormControl(about.eng_main_title_fact),
      rus_main_title_fact: new FormControl(about.rus_main_title_fact),

      ua_main_text_fact: new FormControl(about.ua_main_text_fact),
      eng_main_text_fact: new FormControl(about.eng_main_text_fact),
      rus_main_text_fact: new FormControl(about.rus_main_text_fact),

      ua_main_more: new FormControl(about.ua_main_more),
      eng_main_more: new FormControl(about.eng_main_more),
      rus_main_more: new FormControl(about.rus_main_more),

      number_field1: new FormControl(about.number_field1),
      number_field2: new FormControl(about.number_field2),
      number_field3: new FormControl(about.number_field3),

      number_ua_title1: new FormControl(about.number_ua_title1),
      number_eng_title1: new FormControl(about.number_eng_title1),
      number_rus_title1: new FormControl(about.number_rus_title1),

      number_ua_text1: new FormControl(about.number_ua_text1),
      number_eng_text1: new FormControl(about.number_eng_text1),
      number_rus_text1: new FormControl(about.number_rus_text1),

      number_ua_title2: new FormControl(about.number_ua_title2),
      number_eng_title2: new FormControl(about.number_eng_title2),
      number_rus_title2: new FormControl(about.number_rus_title2),

      number_ua_text2: new FormControl(about.number_ua_text2),
      number_eng_text2: new FormControl(about.number_eng_text2),
      number_rus_text2: new FormControl(about.number_rus_text2),

      number_ua_title3: new FormControl(about.number_ua_title3),
      number_eng_title3: new FormControl(about.number_eng_title3),
      number_rus_title3: new FormControl(about.number_rus_title3),

      number_ua_text3: new FormControl(about.number_ua_text3),
      number_eng_text3: new FormControl(about.number_eng_text3),
      number_rus_text3: new FormControl(about.number_rus_text3),

      number_photo1: new FormControl(about.number_photo1),
      number_photo2: new FormControl(about.number_photo2),
     

      ua_facts_field1: new FormControl(about.ua_facts_field1),
      eng_facts_field1: new FormControl(about.eng_facts_field1),
      rus_facts_field1: new FormControl(about.rus_facts_field1),

      ua_facts_field2: new FormControl(about.ua_facts_field2),
      eng_facts_field2: new FormControl(about.eng_facts_field2),
      rus_facts_field2: new FormControl(about.rus_facts_field2),

      ua_facts_field3: new FormControl(about.ua_facts_field3),
      eng_facts_field3: new FormControl(about.eng_facts_field3),
      rus_facts_field3: new FormControl(about.rus_facts_field3),

      ua_facts_field4: new FormControl(about.ua_facts_field4),
      eng_facts_field4: new FormControl(about.eng_facts_field4),
      rus_facts_field4: new FormControl(about.rus_facts_field4),

      facts_photo1: new FormControl(about.facts_photo1),
      facts_photo2: new FormControl(about.facts_photo2),
      

    
    });
    this.numberPhoto1 = about.number_photo1;
    this.numberPhoto2 = about.number_photo2;
    this.factsPhoto1 = about.facts_photo1;
    this.factsPhoto2 = about.facts_photo2;
    
  }

  Close(): void {
    this.dialogRef.close();
  }

}
