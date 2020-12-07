import { Component, OnInit, Inject, Input } from '@angular/core';
import { Catalog } from '../../../../models/admin-models/model.catalog';
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
import { CatalogService } from '../../../../services/admin-services/catalog.service';


@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.scss']
})
export class AddCatalogComponent implements OnInit {

  fileData: File;
  previewUrl: any ;
  submittedF = false;
  showFile = false;
  fileUploads: Observable<string[]>;
  keyImg;
  keyImgB;
  selectedFiles: FileList;
  currentFileUpload;
  //progress: { percentage: number } = { percentage: 0 };
  uploader: FileUploader;
  myForm: FormGroup;
  @Input() fileUpload: string;
  password: string;
  constructor(
    private uploadService: UploadFileService,
    public dialogRef: MatDialogRef<AddCatalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: CatalogService,
    
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
        this.data && this.data.catalog ? this.data.catalog.id : null
      ),
      
      ua_name: new FormControl(
        this.data && this.data.catalog ? this.data.catalog.ua_name : null,
        [Validators.required]
      ),
      eng_name: new FormControl(
        this.data && this.data.catalog ? this.data.catalog.eng_name : null,
        [Validators.required]
      ),
      rus_name: new FormControl(
        this.data && this.data.catalog ? this.data.catalog.rus_name : null,
        [Validators.required]
      ),
      // photo: new FormControl(
      //   this.data && this.data.catalog ? this.data.catalog.photo : null,
      //   [Validators.required]
      // ),
     
    });
    this.keyImgB = this.data && this.data.catalog ? this.data.catalog.photo : "";
  }

  preview() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }

  selectFile(event) {
    this.keyImgB = null;
    this.selectedFiles = event.target.files;
    this.fileData = event.target.files[0] as File;
    this.preview();
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
    console.log(form);
    //створення нового Catalog з картинкою
    if (this.fileData && !form.id) {
      this.uploadService
        .pushFileToStorage(
          this.fileData,
          1
        )
        .subscribe((event: any) => {
          if (event.body) {
            form.photo = event.body;
            this.dataService.createCatalog(form).subscribe((res: any) => {
             
              const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
    }

    //створення нового Catalog без картинки
    if (!this.fileData && !form.id) {
      this.dataService.createCatalog(form).subscribe((res: any) => {
       
        const addSuccess = true;
        this.dialogRef.close({ reload: addSuccess });
      });
    }

    //редагування Catalog з новою картинкою
    if (form.id && this.fileData) {
      this.uploadService
        .pushFileToStorage(
          this.fileData,
          1,
          form.photo
        )
        .subscribe((event: any) => {
          if (event.body) {
            form.photo = event.body;
            this.dataService
              .updateCatalog(form.id, form)
              .subscribe((res: any) => {
               
                const addSuccess = true;
                this.dialogRef.close({ reload: addSuccess });
              });
          }
        });
    }
    //редагування Catalog без заміни картинки
    if (form.id && !this.fileData) {
      this.dataService.updateCatalog(form.id, form).subscribe((res: any) => {
        
      });
      const addSuccess = true;
      this.dialogRef.close({ reload: addSuccess });
    }
    this.selectedFiles = undefined;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
