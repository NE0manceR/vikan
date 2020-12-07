import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { ReversFormBig } from '../../../../models/admin-models/model.reversFormBig';
import { ReversFormBigService } from '../../../../services/admin-services/reversFormBig';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-view-revers-form-big',
  templateUrl: './view-revers-form-big.component.html',
  styleUrls: ['./view-revers-form-big.component.scss']
})
export class ViewReversFormBigComponent implements OnInit {

  myForm: FormGroup;
  //keyImg;
  urlToServer = "";
  check: number;
  block: string;
  updatedAt: FormControl;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewReversFormBigComponent>,
    public dataService: ReversFormBigService
  ) {}

  ngOnInit(): void {
    this.reactiveForm(this.data.bigForm);
    this.urlToServer = environment.url;
  }
  reactiveForm(bigForm: ReversFormBig) {
    this.myForm = new FormGroup({
      
      name: new FormControl(bigForm.name),
      phone: new FormControl(bigForm.phone),
      email: new FormControl(bigForm.email),
      theme: new FormControl(bigForm.theme),
      message: new FormControl(bigForm.message),
      country: new FormControl(bigForm.country),
      street: new FormControl(bigForm.street),
      company: new FormControl(bigForm.company),
      city: new FormControl(bigForm.city),
      post: new FormControl(bigForm.post),
      createdAt: new FormControl(bigForm.createdAt),
      updatedAt: new FormControl(bigForm.updatedAt),
      
    });

    this.check = bigForm.is_review;
    if (this.check == 0) {
      this.block = "Потребує розгляду !!!";
    }
    else {
      this.updatedAt = new FormControl(bigForm.updatedAt)
    }
    
  }

  Close(): void {
    this.dialogRef.close();
  }

}
