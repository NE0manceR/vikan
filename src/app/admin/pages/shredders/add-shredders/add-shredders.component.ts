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
import { CategorySredders } from '../../../../models/admin-models/model.sredders';
import { SreddersService } from '../../../../services/admin-services/sredders.service';
@Component({
  selector: 'app-add-shredders',
  templateUrl: './add-shredders.component.html',
  styleUrls: ['./add-shredders.component.scss']
})
export class AddShreddersComponent implements OnInit {

  fileData: File = null;
  previewUrl: any = null;
  submittedF = false;
  
  uploader: FileUploader;
  myForm: FormGroup;
  @Input() fileUpload: string;
  password: string;
  constructor(
    
    public dialogRef: MatDialogRef<AddShreddersComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: SreddersService,
    
    
  ) {}
  urlToServer = "";

  ngOnInit(): void {
    this.reactiveForm();
    this.urlToServer = environment.url;
  }

  reactiveForm() {
    this.myForm = new FormGroup({
      id: new FormControl(
        this.data && this.data.shredder ? this.data.shredder.id : null
      ),
      
      ua_name: new FormControl(
        this.data && this.data.shredder ? this.data.shredder.ua_name : null,
        [Validators.required]
      ),
      eng_name: new FormControl(
        this.data && this.data.shredder ? this.data.shredder.eng_name : null,
        [Validators.required]
      ),
      rus_name: new FormControl(
        this.data && this.data.shredder ? this.data.shredder.rus_name : null,
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
   

    //створення нового Shredders 
    if ( !form.id) {
      this.dataService.createSredders(form).subscribe((res: any) => {
       
        const addSuccess = true;
        this.dialogRef.close({ reload: addSuccess });
      });
    }

    
    //редагування Shredders 
    if (form.id ) {
      this.dataService.updateSredders(form.id, form).subscribe((res: any) => {
        
      });
      const addSuccess = true;
      this.dialogRef.close({ reload: addSuccess });
    }
    
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
