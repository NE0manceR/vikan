import { Component, OnInit, Inject } from "@angular/core";
import { Contact } from '../../../../models/admin-models/model.contact';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { ContactService } from '../../../../services/admin-services/contact.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

 
  myForm: FormGroup;
  keyImg;
  urlToServer = "";
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewContactComponent>,
    public dataService: ContactService
  ) {}

  ngOnInit(): void {
    this.reactiveForm(this.data.contact);
    this.urlToServer = environment.url;
  }
  reactiveForm(contact: Contact) {
    this.myForm = new FormGroup({
      //id: new FormControl(contact.id),
      ua_address: new FormControl(contact.ua_address),
      eng_address: new FormControl(contact.eng_address),
      rus_address: new FormControl(contact.rus_address),
      contact_mob: new FormControl(contact.contact_mob),
      contact_stac: new FormControl(contact.contact_stac),
      contact_fax: new FormControl(contact.contact_fax),
      email: new FormControl(contact.email),
      
      
    });
    
  }

  Close(): void {
    this.dialogRef.close();
  }

}
