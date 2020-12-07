import { Component, OnInit, Inject } from "@angular/core";
import { Catalog } from '../../../../models/admin-models/model.catalog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { CatalogService } from '../../../../services/admin-services/catalog.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-view-catalog',
  templateUrl: './view-catalog.component.html',
  styleUrls: ['./view-catalog.component.scss']
})
export class ViewCatalogComponent implements OnInit {

  myForm: FormGroup;
  keyImg;
  urlToServer = "";
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewCatalogComponent>,
    public dataService: CatalogService
  ) {}

  ngOnInit(): void {
    this.reactiveForm(this.data.catalog);
    this.urlToServer = environment.url;
  }
  reactiveForm(catalog: Catalog) {
    this.myForm = new FormGroup({
      //id: new FormControl(catalog.id),
      ua_name: new FormControl(catalog.ua_name),
      eng_name: new FormControl(catalog.eng_name),
      rus_name: new FormControl(catalog.rus_name),
      photo: new FormControl(catalog.photo),
      
    });
    this.keyImg = catalog.photo;
  }

  Close(): void {
    this.dialogRef.close();
  }

}
