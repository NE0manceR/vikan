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
import { Contact } from '../../../../models/admin-models/model.contact';
import { ContactService } from '../../../../services/admin-services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  fileData: File = null;
  previewUrl: any = null;
  submittedF = false;
  //showFile = false;
  //fileUploads: Observable<string[]>;
  //keyImg;
  //keyImgB;
  //selectedFiles: FileList;
  //currentFileUpload;
  uploader: FileUploader;
  myForm: FormGroup;
  @Input() fileUpload: string;
  password: string;
  constructor(
    private uploadService: UploadFileService,
    public dialogRef: MatDialogRef<AddContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: ContactService,
    
    private tokenService: TokenStorageService
  ) {}
  urlToServer = "";

  ngOnInit(): void {
    this.reactiveForm();
    this.urlToServer = environment.url;
  }

  reactiveForm() {
    this.myForm = new FormGroup({
      id: new FormControl(
        this.data && this.data.contact ? this.data.contact.id : null
      ),
      
      ua_address: new FormControl(
        this.data && this.data.contact ? this.data.contact.ua_address : null,
        [Validators.required]
      ),
      eng_address: new FormControl(
        this.data && this.data.contact ? this.data.contact.eng_address : null,
        [Validators.required]
      ),
      rus_address: new FormControl(
        this.data && this.data.contact ? this.data.contact.rus_address : null,
        [Validators.required]
      ),
      contact_mob: new FormControl(
        this.data && this.data.contact ? this.data.contact.contact_mob : null,
        [Validators.required]
      ),
      contact_stac: new FormControl(
        this.data && this.data.contact ? this.data.contact.contact_stac : null,
        [Validators.required]
      ),
      contact_fax: new FormControl(
        this.data && this.data.contact ? this.data.contact.contact_fax : null,
        [Validators.required]
      ),
      email: new FormControl(
        this.data && this.data.contact ? this.data.contact.email : null,
        [Validators.required]
      ),
     
    });
    //this.keyImgB = this.data && this.data.catalog ? this.data.catalog.photo : "";
  }

 

  formGet(formName) {
    return this.myForm.get(formName);
  }

  public confirmAdd() {
    if (!this.myForm.valid) {
      this.submittedF = true;
      return;
    }
    this.submittedF = false;
    const form = this.myForm.value;
   

    //створення нового Catalog без картинки
    if ( !form.id) {
      this.dataService.createContact(form).subscribe((res: any) => {
       
        const addSuccess = true;
        this.dialogRef.close({ reload: addSuccess });
      });
    }

    
    //редагування Catalog без заміни картинки
    if (form.id ) {
      this.dataService.updateContact(form.id, form).subscribe((res: any) => {
        
      });
      const addSuccess = true;
      this.dialogRef.close({ reload: addSuccess });
    }
    
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
