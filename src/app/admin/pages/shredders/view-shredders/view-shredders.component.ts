import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { environment } from '../../../../../environments/environment';
import { CategorySredders } from '../../../../models/admin-models/model.sredders';
import { SreddersService } from '../../../../services/admin-services/sredders.service';

@Component({
  selector: 'app-view-shredders',
  templateUrl: './view-shredders.component.html',
  styleUrls: ['./view-shredders.component.scss']
})
export class ViewShreddersComponent implements OnInit {

  myForm: FormGroup;
  
  urlToServer = "";
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewShreddersComponent>,
    public dataService: SreddersService
  ) {}

  ngOnInit(): void {
    this.reactiveForm(this.data.shredder);
    this.urlToServer = environment.url;
  }
  reactiveForm(shredder: CategorySredders) {
    this.myForm = new FormGroup({
     
      ua_name: new FormControl(shredder.ua_name),
      eng_name: new FormControl(shredder.eng_name),
      rus_name: new FormControl(shredder.rus_name),
      
    });
    
  }

  Close(): void {
    this.dialogRef.close();
  }

}
