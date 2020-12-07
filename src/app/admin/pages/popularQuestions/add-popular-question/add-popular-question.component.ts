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
import { Questions } from '../../../../models/admin-models/model.questions';
import { QuestionsService } from '../../../../services/admin-services/questions.service';


@Component({
  selector: 'app-add-popular-question',
  templateUrl: './add-popular-question.component.html',
  styleUrls: ['./add-popular-question.component.scss']
})
export class AddPopularQuestionComponent implements OnInit {

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
    public dialogRef: MatDialogRef<AddPopularQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: QuestionsService,
    
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
        this.data && this.data.question ? this.data.question.id : null
      ),
      
      ua_question: new FormControl(
        this.data && this.data.question ? this.data.question.ua_question : null,
        [Validators.required]
      ),
      eng_question: new FormControl(
        this.data && this.data.question ? this.data.question.eng_question : null,
        [Validators.required]
      ),
      rus_question: new FormControl(
        this.data && this.data.question ? this.data.question.rus_question : null,
        [Validators.required]
      ),
      ua_answer: new FormControl(
        this.data && this.data.question ? this.data.question.ua_answer : null,
        [Validators.required]
      ),
      eng_answer: new FormControl(
        this.data && this.data.question ? this.data.question.eng_answer : null,
        [Validators.required]
      ),
      rus_answer: new FormControl(
        this.data && this.data.question ? this.data.question.rus_answer : null,
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
   

    //створення нового Questions 
    if ( !form.id) {
      this.dataService.createQuestions(form).subscribe((res: any) => {
       
        const addSuccess = true;
        this.dialogRef.close({ reload: addSuccess });
      });
    }

    
    //редагування Questions 
    if (form.id ) {
      this.dataService.updateQuestions(form.id, form).subscribe((res: any) => {
        
      });
      const addSuccess = true;
      this.dialogRef.close({ reload: addSuccess });
    }
    
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
