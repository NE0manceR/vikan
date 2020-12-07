import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { Questions } from '../../../../models/admin-models/model.questions';
import { QuestionsService } from '../../../../services/admin-services/questions.service';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-view-popular-question',
  templateUrl: './view-popular-question.component.html',
  styleUrls: ['./view-popular-question.component.scss']
})
export class ViewPopularQuestionComponent implements OnInit {

  myForm: FormGroup;
  keyImg;
  urlToServer = "";
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewPopularQuestionComponent>,
    public dataService: QuestionsService
  ) {}

  ngOnInit(): void {
    this.reactiveForm(this.data.question);
    this.urlToServer = environment.url;
  }
  reactiveForm(question: Questions) {
    this.myForm = new FormGroup({
      
      ua_question: new FormControl(question.ua_question),
      eng_question: new FormControl(question.eng_question),
      rus_question: new FormControl(question.rus_question),
      ua_answer: new FormControl(question.ua_answer),
      eng_answer: new FormControl(question.eng_answer),
      rus_answer: new FormControl(question.rus_answer),
      
    });
    
  }

  Close(): void {
    this.dialogRef.close();
  }

}
