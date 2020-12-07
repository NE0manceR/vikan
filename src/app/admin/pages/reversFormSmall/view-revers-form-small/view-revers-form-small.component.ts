import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { ReversFormBig } from '../../../../models/admin-models/model.reversFormBig';
import { ReversFormBigService } from '../../../../services/admin-services/reversFormBig';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-view-revers-form-small',
  templateUrl: './view-revers-form-small.component.html',
  styleUrls: ['./view-revers-form-small.component.scss']
})
export class ViewReversFormSmallComponent implements OnInit {
  updatedAt;
  myForm: FormGroup;
  check;
  urlToServer = "";
  block;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewReversFormSmallComponent>,
    public dataService: ReversFormBigService
  ) { }

  ngOnInit(): void {
    this.reactiveForm(this.data.smallForm);
    this.urlToServer = environment.url;
  }
  reactiveForm(smallForm: ReversFormBig) {
    this.myForm = new FormGroup({

      name: new FormControl(smallForm.name),
      phone: new FormControl(smallForm.phone),

      createdAt: new FormControl(smallForm.createdAt),

    });
    this.check = smallForm.is_review;
    if (this.check == 0) {
      this.block = "Потребує розгляду !!!";
    }
    else {
      this.updatedAt = new FormControl(smallForm.updatedAt)
    }
  
  }

  Close(): void {
    this.dialogRef.close();
  }

}
