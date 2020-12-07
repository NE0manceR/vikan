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
import { ServiceTitle } from '../../../../models/admin-models/model.serviceTitle';
import { ServiceTitleService } from '../../../../services/admin-services/serviceTitle.service';


@Component({
  selector: 'app-add-service-title',
  templateUrl: './add-service-title.component.html',
  styleUrls: ['./add-service-title.component.scss']
})
export class AddServiceTitleComponent implements OnInit {

  fileData: File = null;
  previewUrl: any = null;
  submittedF = false;
  
  uploader: FileUploader;
  myForm: FormGroup;
  @Input() fileUpload: string;
  password: string;
  constructor(
    private uploadService: UploadFileService,
    public dialogRef: MatDialogRef<AddServiceTitleComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: ServiceTitleService,
    
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
        this.data && this.data.title ? this.data.title.id : null
      ),
      
      email: new FormControl(
        this.data && this.data.title ? this.data.title.email : null,
        [Validators.required]
      ),
      mobile: new FormControl(
        this.data && this.data.title ? this.data.title.mobile : null,
        [Validators.required]
      ),
      phone: new FormControl(
        this.data && this.data.title ? this.data.title.phone : null,
        [Validators.required]
      ),
      
     
    });
    
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
   

    //створення нового ServiceTitle 
    if ( !form.id) {
      this.dataService.createServiceTitle(form).subscribe((res: any) => {
       
        const addSuccess = true;
        this.dialogRef.close({ reload: addSuccess });
      });
    }

    
    //редагування ServiceTitle 
    if (form.id ) {
      this.dataService.updateServiceTitle(form.id, form).subscribe((res: any) => {
        
      });
      const addSuccess = true;
      this.dialogRef.close({ reload: addSuccess });
    }
    
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
