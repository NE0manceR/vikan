import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { environment } from '../../../../../environments/environment';
import { Raw } from '../../../../models/admin-models/model.raw';
import { RawService } from '../../../../services/admin-services/raw.service';


@Component({
  selector: 'app-view-raw',
  templateUrl: './view-raw.component.html',
  styleUrls: ['./view-raw.component.scss']
})
export class ViewRawComponent implements OnInit {

  contentSwitch

  
  myForm: FormGroup;
  keyImg;
  urlToServer = "";
  ImgIcon: any;
  ImgP1: any;
  ImgP2: any;
  ImgP3: any;
  ImgP4: any;
  ImgP5: any;
  ImgP6: any;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewRawComponent>,
    public dataService: RawService
  ) {}

  ngOnInit(): void {
    this.reactiveForm(this.data.raw);
    this.urlToServer = environment.url;
  }
  reactiveForm(raw: Raw) {
    this.myForm = new FormGroup({
      //id: new FormControl(catalog.id),
      ua_name: new FormControl(raw.ua_name),
      eng_name: new FormControl(raw.eng_name),
      rus_name: new FormControl(raw.rus_name),

      ua_description: new FormControl(raw.ua_description),
      eng_description: new FormControl(raw.eng_description),
      rus_description: new FormControl(raw.rus_description),


      icon: new FormControl(raw.raw_icon),
      photo1: new FormControl(raw.raw_photo1),
      photo2: new FormControl(raw.raw_photo2),
      photo3: new FormControl(raw.raw_photo3),
      photo4: new FormControl(raw.raw_photo4),
      photo5: new FormControl(raw.raw_photo5),
      photo6: new FormControl(raw.raw_photo6),
     
      
    });
    this.ImgIcon = raw.raw_icon;
    this.ImgP1 = raw.raw_photo1;
    this.ImgP2 = raw.raw_photo2;
    this.ImgP3 = raw.raw_photo3;
    this.ImgP4 = raw.raw_photo4;
    this.ImgP5 = raw.raw_photo5;
    this.ImgP6 = raw.raw_photo6;
  }

  Close(): void {
    this.dialogRef.close();
  }

}
