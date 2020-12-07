import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { environment } from '../../../../../environments/environment';
import { ServiceTitle } from '../../../../models/admin-models/model.serviceTitle';
import { ServiceTitleService } from '../../../../services/admin-services/serviceTitle.service';
@Component({
  selector: 'app-view-service-title',
  templateUrl: './view-service-title.component.html',
  styleUrls: ['./view-service-title.component.scss']
})
export class ViewServiceTitleComponent implements OnInit {

  myForm: FormGroup;
  
  urlToServer = "";
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewServiceTitleComponent>,
    public dataService: ServiceTitleService
  ) {}

  ngOnInit(): void {
    this.reactiveForm(this.data.title);
    this.urlToServer = environment.url;
  }
  reactiveForm(title: ServiceTitle) {
    this.myForm = new FormGroup({
     
      email: new FormControl(title.email),
      mobile: new FormControl(title.mobile),
      phone: new FormControl(title.phone),
      
    });
    
  }

  Close(): void {
    this.dialogRef.close();
  }

}
