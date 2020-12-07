import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { environment } from '../../../../../environments/environment';
import { CategorySortingLine } from '../../../../models/admin-models/model.sortingLine';
import { SortingLineService } from '../../../../services/admin-services/sortingLine.service';

@Component({
  selector: 'app-view-sort-line',
  templateUrl: './view-sort-line.component.html',
  styleUrls: ['./view-sort-line.component.scss']
})
export class ViewSortLineComponent implements OnInit {

  myForm: FormGroup;
  
  urlToServer = "";
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewSortLineComponent>,
    public dataService: SortingLineService
  ) {}

  ngOnInit(): void {
    this.reactiveForm(this.data.line);
    this.urlToServer = environment.url;
  }
  reactiveForm(line: CategorySortingLine) {
    this.myForm = new FormGroup({
     
      ua_name: new FormControl(line.ua_name),
      eng_name: new FormControl(line.eng_name),
      rus_name: new FormControl(line.rus_name),
      
    });
    
  }

  Close(): void {
    this.dialogRef.close();
  }


}
