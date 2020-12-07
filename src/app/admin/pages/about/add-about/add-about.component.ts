import { Component, OnInit, Inject, Input } from '@angular/core';
import { About } from '../../../../models/admin-models/model.about';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UploadFileService } from '../../../../services/admin-services/upload-file.service';
import { TokenStorageService } from '../../../../auth/token-storage.service';
import { environment } from '../../../../../environments/environment';
import { AboutService } from '../../../../services/admin-services/about.service';
import { faEye } from "@fortawesome/free-regular-svg-icons";
@Component({
  selector: 'app-add-about',
  templateUrl: './add-about.component.html',
  styleUrls: ['./add-about.component.scss'],
  //providers: [AboutService]
})
export class AddAboutComponent implements OnInit {
  



  
  fileUploads: Observable<string[]>;
  eye = faEye;
  numberPhoto1;
  numberPhoto2;
  factsPhoto1;
  factsPhoto2;
  showBlock;
  
  fileData1: File;
  fileData2: File;
  fileData3: File;
  fileData4: File;

  previewUrl: any = null;
 
  uploader: FileUploader;
  myForm: FormGroup;
  urlToServer = '';
  submittedF = false;
  @Input() fileUpload: string;

  event: any;

  NumFoto1: any;
  NumFoto2: any;
  FacFoto1: any;
  FacFoto2: any;

  previewNP1: any;
  previewNP2: any;
  previewFP1: any;
  previewFP2: any;

  constructor(

    private uploadService: UploadFileService,
    public dialogRef: MatDialogRef<AddAboutComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: AboutService,
    private tokenService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
    this.urlToServer = environment.url;
  }

  reactiveForm() {
    //console.log(this.data);
    this.myForm = new FormGroup({
      id: new FormControl(
        this.data && this.data.about ? this.data.about.id : null
      ),

      is_publish: new FormControl(
        this.data && this.data.about ? this.data.about.is_publish : null,
        [Validators.required]
      ),

      ua_title: new FormControl(
        this.data && this.data.about ? this.data.about.ua_title : null,
        [Validators.required]
      ),
      eng_title: new FormControl(
        this.data && this.data.about ? this.data.about.eng_title : null,
        [Validators.required]
      ),
      rus_title: new FormControl(
        this.data && this.data.about ? this.data.about.rus_title : null,
        [Validators.required]
      ),

      ua_main_title_number: new FormControl(
        this.data && this.data.about
          ? this.data.about.ua_main_title_number
          : null,
        [Validators.required]
      ),
      eng_main_title_number: new FormControl(
        this.data && this.data.about
          ? this.data.about.eng_main_title_number
          : null,
        [Validators.required]
      ),
      rus_main_title_number: new FormControl(
        this.data && this.data.about
          ? this.data.about.rus_main_title_number
          : null,
        [Validators.required]
      ),

      ua_main_text_number: new FormControl(
        this.data && this.data.about
          ? this.data.about.ua_main_text_number
          : null,
        [Validators.required]
      ),
      eng_main_text_number: new FormControl(
        this.data && this.data.about
          ? this.data.about.eng_main_text_number
          : null,
        [Validators.required]
      ),
      rus_main_text_number: new FormControl(
        this.data && this.data.about
          ? this.data.about.rus_main_text_number
          : null,
        [Validators.required]
      ),

      ua_main_title_fact: new FormControl(
        this.data && this.data.about
          ? this.data.about.ua_main_title_fact
          : null,
        [Validators.required]
      ),
      eng_main_title_fact: new FormControl(
        this.data && this.data.about
          ? this.data.about.eng_main_title_fact
          : null,
        [Validators.required]
      ),
      rus_main_title_fact: new FormControl(
        this.data && this.data.about
          ? this.data.about.rus_main_title_fact
          : null,
        [Validators.required]
      ),

      ua_main_text_fact: new FormControl(
        this.data && this.data.about ? this.data.about.ua_main_text_fact : null,
        [Validators.required]
      ),
      eng_main_text_fact: new FormControl(
        this.data && this.data.about
          ? this.data.about.eng_main_text_fact
          : null,
        [Validators.required]
      ),
      rus_main_text_fact: new FormControl(
        this.data && this.data.about
          ? this.data.about.rus_main_text_fact
          : null,
        [Validators.required]
      ),

      ua_main_more: new FormControl(
        this.data && this.data.about ? this.data.about.ua_main_more : null,
        [Validators.required]
      ),
      eng_main_more: new FormControl(
        this.data && this.data.about ? this.data.about.eng_main_more : null,
        [Validators.required]
      ),
      rus_main_more: new FormControl(
        this.data && this.data.about ? this.data.about.rus_main_more : null,
        [Validators.required]
      ),

      number_field1: new FormControl(
        this.data && this.data.about ? this.data.about.number_field1 : null,
        [Validators.required]
      ),
      number_field2: new FormControl(
        this.data && this.data.about ? this.data.about.number_field2 : null,
        [Validators.required]
      ),
      number_field3: new FormControl(
        this.data && this.data.about ? this.data.about.number_field3 : null,
        [Validators.required]
      ),

      number_ua_title1: new FormControl(
        this.data && this.data.about ? this.data.about.number_ua_title1 : null,
        [Validators.required]
      ),
      number_eng_title1: new FormControl(
        this.data && this.data.about ? this.data.about.number_eng_title1 : null,
        [Validators.required]
      ),
      number_rus_title1: new FormControl(
        this.data && this.data.about ? this.data.about.number_rus_title1 : null,
        [Validators.required]
      ),

      number_ua_text1: new FormControl(
        this.data && this.data.about ? this.data.about.number_ua_text1 : null,
        [Validators.required]
      ),
      number_eng_text1: new FormControl(
        this.data && this.data.about ? this.data.about.number_eng_text1 : null,
        [Validators.required]
      ),
      number_rus_text1: new FormControl(
        this.data && this.data.about ? this.data.about.number_rus_text1 : null,
        [Validators.required]
      ),

      number_ua_title2: new FormControl(
        this.data && this.data.about ? this.data.about.number_ua_title2 : null,
        [Validators.required]
      ),
      number_eng_title2: new FormControl(
        this.data && this.data.about ? this.data.about.number_eng_title2 : null,
        [Validators.required]
      ),
      number_rus_title2: new FormControl(
        this.data && this.data.about ? this.data.about.number_rus_title2 : null,
        [Validators.required]
      ),

      number_ua_text2: new FormControl(
        this.data && this.data.about ? this.data.about.number_ua_text2 : null,
        [Validators.required]
      ),
      number_eng_text2: new FormControl(
        this.data && this.data.about ? this.data.about.number_eng_text2 : null,
        [Validators.required]
      ),
      number_rus_text2: new FormControl(
        this.data && this.data.about ? this.data.about.number_rus_text2 : null,
        [Validators.required]
      ),

      number_ua_title3: new FormControl(
        this.data && this.data.about ? this.data.about.number_ua_title3 : null,
        [Validators.required]
      ),
      number_eng_title3: new FormControl(
        this.data && this.data.about ? this.data.about.number_eng_title3 : null,
        [Validators.required]
      ),
      number_rus_title3: new FormControl(
        this.data && this.data.about ? this.data.about.number_rus_title3 : null,
        [Validators.required]
      ),

      number_ua_text3: new FormControl(
        this.data && this.data.about ? this.data.about.number_ua_text3 : null,
        [Validators.required]
      ),
      number_eng_text3: new FormControl(
        this.data && this.data.about ? this.data.about.number_eng_text3 : null,
        [Validators.required]
      ),
      number_rus_text3: new FormControl(
        this.data && this.data.about ? this.data.about.number_rus_text3 : null,
        [Validators.required]
      ),

      number_photo1: new FormControl(
        this.data && this.data.about ? this.data.about.number_photo1 : null,
        [Validators.required]
      ),
      number_photo2: new FormControl(
        this.data && this.data.about ? this.data.about.number_photo2 : null,
        [Validators.required]
      ),

      ua_facts_field1: new FormControl(
        this.data && this.data.about ? this.data.about.ua_facts_field1 : null,
        [Validators.required]
      ),
      eng_facts_field1: new FormControl(
        this.data && this.data.about ? this.data.about.eng_facts_field1 : null,
        [Validators.required]
      ),
      rus_facts_field1: new FormControl(
        this.data && this.data.about ? this.data.about.rus_facts_field1 : null,
        [Validators.required]
      ),

      ua_facts_field2: new FormControl(
        this.data && this.data.about ? this.data.about.ua_facts_field2 : null,
        [Validators.required]
      ),
      eng_facts_field2: new FormControl(
        this.data && this.data.about ? this.data.about.eng_facts_field2 : null,
        [Validators.required]
      ),
      rus_facts_field2: new FormControl(
        this.data && this.data.about ? this.data.about.rus_facts_field2 : null,
        [Validators.required]
      ),

      ua_facts_field3: new FormControl(
        this.data && this.data.about ? this.data.about.ua_facts_field3 : null,
        [Validators.required]
      ),
      eng_facts_field3: new FormControl(
        this.data && this.data.about ? this.data.about.eng_facts_field3 : null,
        [Validators.required]
      ),
      rus_facts_field3: new FormControl(
        this.data && this.data.about ? this.data.about.rus_facts_field3 : null,
        [Validators.required]
      ),

      ua_facts_field4: new FormControl(
        this.data && this.data.about ? this.data.about.ua_facts_field4 : null,
        [Validators.required]
      ),
      eng_facts_field4: new FormControl(
        this.data && this.data.about ? this.data.about.eng_facts_field4 : null,
        [Validators.required]
      ),
      rus_facts_field4: new FormControl(
        this.data && this.data.about ? this.data.about.rus_facts_field4 : null,
        [Validators.required]
      ),

      facts_photo1: new FormControl(
        this.data && this.data.about ? this.data.about.facts_photo1 : null,
        [Validators.required]
      ),
      facts_photo2: new FormControl(
        this.data && this.data.about ? this.data.about.facts_photo2 : null,
        [Validators.required]
      ),
    });
    
     this.NumFoto1 = this.data && this.data.about ? this.data.about.number_photo1 : "";
     this.NumFoto2 = this.data && this.data.about ? this.data.about.number_photo2 : "";
     this.FacFoto1 = this.data && this.data.about ? this.data.about.facts_photo1 : "";
     this.FacFoto2 = this.data && this.data.about ? this.data.about.facts_photo2 : "";
    
  }

  

  selectNumberPhoto1(event) {
    console.log(event)
    this.NumFoto1 = null;
    this.fileData1 = event.target.files[0] as File;
    this.previewNumberPhoto1();
  }
  previewNumberPhoto1() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData1);
    reader.onload = (_event) => {
      this.previewNP1 = reader.result;
    };
  }


  selectNumberPhoto2(event) {
    this.NumFoto2 = null;
    this.fileData2 = event.target.files[0] as File;
    this.previewNumberPhoto2();
  }
  previewNumberPhoto2() {
    const reader2 = new FileReader();
    reader2.readAsDataURL(this.fileData2);
    reader2.onload = (_event) => {
      this.previewNP2 = reader2.result;
    };
  }

  selectFactsPhoto1(event) {
    this.FacFoto1 = null;
    this.fileData3 = event.target.files[0] as File;
    this.previewFactsPhoto1();
  }
  previewFactsPhoto1() {
    const reader3 = new FileReader();
    reader3.readAsDataURL(this.fileData3);
    reader3.onload = (_event) => {
      this.previewFP1 = reader3.result;
    };
  }

  selectFactsPhoto2(event) {
    this.FacFoto2 = null;
    this.fileData4 = event.target.files[0] as File;
    this.previewFactsPhoto2();
  }
  previewFactsPhoto2() {
    const reader4 = new FileReader();
    reader4.readAsDataURL(this.fileData4);
    reader4.onload = (_event) => {
      this.previewFP2 = reader4.result;
    };
  }

  formGet(formName) {
    return this.myForm.get(formName);
  }

  public confirmAdd() {
    // if (!this.myForm.valid) {
    //   this.submittedF = true;
    //   return;
    // }
    this.submittedF = false;
    const form = this.myForm.value;

    
    //створення нового About з картинкою
    if (this.fileData1 && this.fileData2 && this.fileData3 && this.fileData4 && !form.id) {

      this.uploadService
        .pushFileToStorage(
          this.fileData1,
          1
        )
        .subscribe((event1: any) => {
          if (event1['body']) {
            form.number_photo1 = event1['body'];

            this.uploadService
              .pushFileToStorage(
                this.fileData2,
                1
              )
              .subscribe((event2: any) => {
                if (event2['body']) {
                  form.number_photo2 = event2['body'];

                  this.uploadService
                    .pushFileToStorage(
                      this.fileData3,
                      1
                    )
                    .subscribe((event3: any) => {
                      if (event3['body']) {
                        form.facts_photo1 = event3['body'];

                        this.uploadService
                          .pushFileToStorage(
                            this.fileData4,
                            1
                          )
                          .subscribe((event4: any) => {
                            if (event4['body']) {
                              form.facts_photo2 = event4['body'];
console.log(form)
                              this.dataService.createAbout(form).subscribe((res: any) => {
                                if (res.succes === true) {
                                  res.data;
                                }
                                const addSuccess = true;
                                this.dialogRef.close({ reload: addSuccess });
                              });

                            }

                          })
                      }
                    })
                }
              })

          }
        })

    }



    //редагування About з новою картинкою
    if (form.id && this.fileData1 && this.fileData2 && this.fileData3 && this.fileData4) {


      this.uploadService
        .pushFileToStorage(
          this.fileData1,
          1
        )
        .subscribe((event1: any) => {
          if (event1['body']) {
            form.number_photo1 = event1['body'];

            this.uploadService
              .pushFileToStorage(
                this.fileData2,
                1
              )
              .subscribe((event2: any) => {
                if (event2['body']) {
                  form.number_photo2 = event2['body'];

                  this.uploadService
                    .pushFileToStorage(
                      this.fileData3,
                      1
                    )
                    .subscribe((event3: any) => {
                      if (event3['body']) {
                        form.facts_photo1 = event3['body'];

                        this.uploadService
                          .pushFileToStorage(
                            this.fileData4,
                            1
                          )
                          .subscribe((event4: any) => {
                            if (event4['body']) {
                              form.facts_photo2 = event4['body'];
console.log(form.id+"<---id in update")
console.log(form)
                              this.dataService
                                .updateAbout(form.id, form)
                                .subscribe((res: any) => {
                                  if (res.succes === true) {
                                    res.data;
                                  }
                                  const addSuccess = true;
                                  this.dialogRef.close({ reload: addSuccess });
                                });

                            }

                          })
                      }
                    })
                }
              })

          }
        })

    }



    //редагування About без заміни картинки
    if (form.id && !this.fileData1 && !this.fileData2 && !this.fileData3 && !this.fileData4) {
      console.log(form.id+"<---id in update без fileData")
console.log(form)
      this.dataService.updateAbout(form.id, form).subscribe((res: any) => {
        res.data;
      });
      const addSuccess = true;
      this.dialogRef.close({ reload: addSuccess });
    }

    // this.fileData1 = undefined;
    // this.fileData2 = undefined;
    // this.fileData3 = undefined;
    // this.fileData4 = undefined;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
