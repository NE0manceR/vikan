import { Component, OnInit, Inject, Input } from '@angular/core';
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
import { Raw } from '../../../../models/admin-models/model.raw';
import { RawService } from '../../../../services/admin-services/raw.service';


@Component({
  selector: 'app-add-raw',
  templateUrl: './add-raw.component.html',
  styleUrls: ['./add-raw.component.scss']
})
export class AddRawComponent implements OnInit {


  fileUploads: Observable<string[]>;
  link;
  grey;
  blue;
  linkText;
  index = 0;

  previewUrl: any = null;

  uploader: FileUploader;
  myForm: FormGroup;
  urlToServer = '';
  submittedF = false;
  @Input() fileUpload: string;
  event: any;

  selectedIcon: FileList;
  selectedFiles1: FileList;
  selectedFiles2: FileList;
  selectedFiles3: FileList;
  selectedFiles4: FileList;
  selectedFiles5: FileList;
  selectedFiles6: FileList;

  photo1: any;
  photo2: any;
  photo3: any;
  photo4: any;
  photo5: any;
  photo6: any;

  ImgIcon: any;
  ImgP1: any;
  ImgP2: any;
  ImgP3: any;
  ImgP4: any;
  ImgP5: any;
  ImgP6: any;

  previewIcons: any;
  previewPhoto1: any;
  previewPhoto2: any;
  previewPhoto3: any;
  previewPhoto4: any;
  previewPhoto5: any;
  previewPhoto6: any;

  fileDataIcon: File;
  fileData1: File;
  fileData2: File;
  fileData3: File;
  fileData4: File;
  fileData5: File;
  fileData6: File;

  contentSwitch;
  constructor(

    private uploadService: UploadFileService,
    public dialogRef: MatDialogRef<AddRawComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: RawService,
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
        this.data && this.data.raw ? this.data.raw.id : null
      ),
      is_publish: new FormControl(
        this.data && this.data.raw ? this.data.raw.is_publish : null,
        [Validators.required]
      ),

      ua_name: new FormControl(
        this.data && this.data.raw ? this.data.raw.ua_name : null,
        [Validators.required]
      ),
      eng_name: new FormControl(
        this.data && this.data.raw ? this.data.raw.eng_name : null,
        [Validators.required]
      ),
      rus_name: new FormControl(
        this.data && this.data.raw ? this.data.raw.rus_name : null,
        [Validators.required]
      ),

      ua_description: new FormControl(
        this.data && this.data.raw
          ? this.data.raw.ua_description
          : null,
        [Validators.required]
      ),
      eng_description: new FormControl(
        this.data && this.data.raw
          ? this.data.raw.eng_description
          : null,
        [Validators.required]
      ),
      rus_description: new FormControl(
        this.data && this.data.raw
          ? this.data.raw.rus_description
          : null,
        [Validators.required]
      ),

      raw_icon: new FormControl(
        this.data && this.data.raw
          ? this.data.raw.raw_icon
          : null,
        [Validators.required]
      ),
      raw_photo1: new FormControl(
        this.data && this.data.raw
          ? this.data.raw.raw_photo1
          : null,
        [Validators.required]
      ),
      raw_photo2: new FormControl(
        this.data && this.data.raw
          ? this.data.raw.raw_photo2
          : null,
        [Validators.required]
      ),

      raw_photo3: new FormControl(
        this.data && this.data.raw
          ? this.data.raw.raw_photo3
          : null,
        [Validators.required]
      ),
      raw_photo4: new FormControl(
        this.data && this.data.raw
          ? this.data.raw.raw_photo4
          : null,
        [Validators.required]
      ),
      raw_photo5: new FormControl(
        this.data && this.data.raw
          ? this.data.raw.raw_photo5
          : null,
        [Validators.required]
      ),

      raw_photo6: new FormControl(
        this.data && this.data.raw ? this.data.raw.raw_photo6 : null,
        [Validators.required]
      ),

    });
     this.ImgIcon =  this.data && this.data.raw? this.data.raw.raw_icon  : "";
     this.ImgP1 =  this.data && this.data.raw? this.data.raw.raw_photo1  : "";
     this.ImgP2 =  this.data && this.data.raw? this.data.raw.raw_photo2  : "";    
     this.ImgP3 =  this.data && this.data.raw? this.data.raw.raw_photo3  : "";
     this.ImgP4 =  this.data && this.data.raw? this.data.raw.raw_photo4  : "";
     this.ImgP5 =  this.data && this.data.raw? this.data.raw.raw_photo5  : "";
     this.ImgP6 =  this.data && this.data.raw? this.data.raw.raw_photo6  : "";
         
  }

  selectIcon(event) {
    this.ImgIcon = null;
    this.selectedIcon = event.target.files;
    this.fileDataIcon = event.target.files[0] as File;
    this.previewIcon();

  }
  previewIcon() {
    const readerI = new FileReader();
    readerI.readAsDataURL(this.fileDataIcon);
    readerI.onload = (_event) => {
      this.previewIcons = readerI.result;
    };
  }


  selectPhoto1(event) {
    this.ImgP1 = null;
    this.selectedFiles1 = event.target.files;
    this.fileData1 = event.target.files[0] as File;
    this.previewP1();
  }
  previewP1() {
    const reader1 = new FileReader();
    reader1.readAsDataURL(this.fileData1);
    reader1.onload = (_event1) => {
      this.previewPhoto1 = reader1.result;
    };
  }


  selectPhoto2(event) {
    this.ImgP2 = null;
    this.selectedFiles2 = event.target.files;
    this.fileData2 = event.target.files[0] as File;
    this.previewP2();
  }
  previewP2() {
    const reader2 = new FileReader();
    reader2.readAsDataURL(this.fileData2);
    reader2.onload = (_event) => {
      this.previewPhoto2 = reader2.result;
    };
  }


  selectPhoto3(event) {
    this.ImgP3 = null;
    this.selectedFiles3 = event.target.files;
    this.fileData3 = event.target.files[0] as File;
    this.previewP3();
  }
  previewP3() {
    const reader3 = new FileReader();
    reader3.readAsDataURL(this.fileData3);
    reader3.onload = (_event) => {
      this.previewPhoto3 = reader3.result;
    };
  }




  selectPhoto4(event) {
    this.ImgP4 = null;
    this.selectedFiles4 = event.target.files;
    this.fileData4 = event.target.files[0] as File;
    this.previewP4();
  }
  previewP4() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData4);
    reader.onload = (_event) => {
      this.previewPhoto4 = reader.result;
    };
  }



  selectPhoto5(event) {
    this.ImgP5 = null;
    this.selectedFiles5 = event.target.files;
    this.fileData5 = event.target.files[0] as File;
    this.previewP5();
  }
  previewP5() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData5);
    reader.onload = (_event) => {
      this.previewPhoto5 = reader.result;
    };
  }



  selectPhoto6(event) {
    this.ImgP6 = null;
    this.selectedFiles6 = event.target.files;
    this.fileData6 = event.target.files[0] as File;
    this.previewP6();
  }
  previewP6() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData6);
    reader.onload = (_event) => {
      this.previewPhoto6 = reader.result;
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
    
    //створення нового Raw з картинкою /
    if (this.fileData1 && this.fileData2 && this.fileData3 && this.fileData4 && this.fileData5 && this.fileData6 && this.fileDataIcon && !form.id) {
      this.uploadService.pushFileToStorage(this.fileDataIcon, 1).subscribe((event: any) => {
        if (event['body']) {
          form.raw_icon = event['body'];
          this.uploadService.pushFileToStorage(this.fileData1, 1).subscribe((event: any) => {
            if (event['body']) {
              form.raw_photo1 = event['body'];
              this.uploadService.pushFileToStorage(this.fileData2, 1).subscribe((event2: any) => {
                if (event2['body']) {
                  form.raw_photo2 = event2['body'];
                  this.uploadService.pushFileToStorage(this.fileData3, 1).subscribe((event3: any) => {
                    if (event3['body']) {
                      form.raw_photo3 = event3['body'];
                      this.uploadService.pushFileToStorage(this.fileData4, 1).subscribe((event4: any) => {
                        if (event4['body']) {
                          form.raw_photo4 = event4['body'];
                          this.uploadService.pushFileToStorage(this.fileData5, 1).subscribe((event5: any) => {
                            if (event5['body']) {
                              form.raw_photo5 = event5['body'];
                              this.uploadService.pushFileToStorage(this.fileData6, 1).subscribe((event6: any) => {
                                if (event6['body']) {
                                  form.raw_photo6 = event6['body'];

                                  this.dataService.createRaw(form).subscribe((res: any) => {
                                    if (res.succes === true) {
                                      console.log(res.data);
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
              })
            }
          })
        }
      })

    }



    //редагування Raw з новою картинкою
    if (this.fileData1 && this.fileData2 && this.fileData3 && this.fileData4 && this.fileData5 && this.fileData6 && this.fileDataIcon && form.id) {

      this.uploadService.pushFileToStorage(this.fileDataIcon, 1).subscribe((event: any) => {
        if (event['body']) {
          form.raw_icon = event['body'];
          this.uploadService.pushFileToStorage(this.fileData1, 1).subscribe((event: any) => {
            if (event['body']) {
              form.raw_photo1 = event['body'];
              this.uploadService.pushFileToStorage(this.fileData2, 1).subscribe((event2: any) => {
                if (event2['body']) {
                  form.raw_photo2 = event2['body'];
                  this.uploadService.pushFileToStorage(this.fileData3, 1).subscribe((event3: any) => {
                    if (event3['body']) {
                      form.raw_photo3 = event3['body'];
                      this.uploadService.pushFileToStorage(this.fileData4, 1).subscribe((event4: any) => {
                        if (event4['body']) {
                          form.raw_photo4 = event4['body'];
                          this.uploadService.pushFileToStorage(this.fileData5, 1).subscribe((event5: any) => {
                            if (event5['body']) {
                              form.raw_photo5 = event5['body'];
                              this.uploadService.pushFileToStorage(this.fileData6, 1).subscribe((event6: any) => {
                                if (event6['body']) {
                                  form.raw_photo6 = event6['body'];

                                  this.dataService.updateRaw(form.id, form).subscribe((res: any) => {
                                    if (res.success === true) {
                                      console.log(res.data);
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
              })
            }
          })
        }
      })
    }



    //редагування Raw без заміни картинки
    if (!this.fileData1 && !this.fileData2 && !this.fileData3 && !this.fileData4 && !this.fileData5 && !this.fileData6 && !this.fileDataIcon && form.id) {
      this.dataService.updateRaw(form.id, form).subscribe((res: any) => {
        res.data;
      });
      const addSuccess = true;
      this.dialogRef.close({ reload: addSuccess });
    }
    this.selectedFiles1 = undefined;
    this.selectedFiles2 = undefined;
    this.selectedFiles3 = undefined;
    this.selectedFiles4 = undefined;
    this.selectedFiles5 = undefined;
    this.selectedFiles6 = undefined;
    this.selectedIcon = undefined;


  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


