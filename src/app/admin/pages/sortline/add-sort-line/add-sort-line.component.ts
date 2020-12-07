import { Component, OnInit, Inject, Input } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { CategorySortingLine } from '../../../../models/admin-models/model.sortingLine';
import { SortingLineService } from '../../../../services/admin-services/sortingLine.service';


@Component({
  selector: 'app-add-sort-line',
  templateUrl: './add-sort-line.component.html',
  styleUrls: ['./add-sort-line.component.scss']
})
export class AddSortLineComponent implements OnInit {

  fileData: File = null;
  previewUrl: any = null;
  submittedF = false;
  uploader: FileUploader;
  myForm: FormGroup;
  @Input() fileUpload: string;
  password: string;
  constructor(
    
    public dialogRef: MatDialogRef<AddSortLineComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: SortingLineService,
    
  ) {}
  urlToServer = "";

  ngOnInit(): void {
    this.reactiveForm();
    this.urlToServer = environment.url;
  }

  reactiveForm() {
    this.myForm = new FormGroup({
      id: new FormControl(
        this.data && this.data.line ? this.data.line.id : null
      ),
      
      ua_name: new FormControl(
        this.data && this.data.line ? this.data.line.ua_name : null,
        [Validators.required]
      ),
      eng_name: new FormControl(
        this.data && this.data.line ? this.data.line.eng_name : null,
        [Validators.required]
      ),
      rus_name: new FormControl(
        this.data && this.data.line ? this.data.line.rus_name : null,
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
   

    //створення нового Catalog без картинки
    if ( !form.id) {
      this.dataService.createSortingLine(form).subscribe((res: any) => {
       
        const addSuccess = true;
        this.dialogRef.close({ reload: addSuccess });
      });
    }

    
    //редагування Catalog без заміни картинки
    if (form.id ) {
      this.dataService.updateSortingLine(form.id, form).subscribe((res: any) => {
        
      });
      const addSuccess = true;
      this.dialogRef.close({ reload: addSuccess });
    }
    
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
