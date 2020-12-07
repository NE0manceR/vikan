import { Component, OnInit, ViewChild } from '@angular/core';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  MatPaginator,
  MatDialogConfig,
  MatDialog,
  MatTableDataSource,
} from "@angular/material";
import {MatTableModule} from '@angular/material/table';
import { Router, ActivatedRoute } from "@angular/router";
import { Contact } from '../../../../models/admin-models/model.contact';
import { ContactService } from '../../../../services/admin-services/contact.service';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { ViewContactComponent } from '../view-contact/view-contact.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  dataSource: any;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  lang='all';
  eye = faEye;
  config: any;
  currentPage = "last";
  dialog: MatDialog;
  editModel: Contact;
  viewModel: Contact;
  displedColumns: string[] = [
    "Publish",
    "AddressUA",
    "Mob",
    "Stac",
    "Fax",
    "Options",
  ];
  statusMessage: string;

  constructor(
    private modelService: ContactService,
    dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    
  ) {
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.getPublish();
  }

  public loadCatalog() {
    this.modelService.getData(1, 10,'last','all').subscribe(data => {
      this.dataSource = data['data'];

    });
  }
  //add contact
  addModal() {
    const dialogRef = this.dialog.open(AddContactComponent, {
      width: "90%",
      height: "90%",
    });
    dialogRef.afterClosed().subscribe((res) => {
      res;

      this.getNoPublish();
    });
  }

  
  // view contact
  viewModal(contact: Contact): void {
    this.viewModel = contact;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      contact: contact,
    };
    const dialogRef = this.dialog.open(ViewContactComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;

      this.getPublish();
    });
  }
  // edit contact
  editModal(contact: Contact): void {
    this.editModel = contact;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      contact: contact,
    };
    const dialogRef = this.dialog.open(AddContactComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getNoPublish();
    });
  }
  // delete Contact
  delete(catalog: Contact): void {

    this.modelService.deleteContact(catalog.id).subscribe((data) => {
      this.loadCatalog();
    });
  }

  close() {
    this.dialog.closeAll();
  }

 

  getPublish() {
    this.modelService.getData(1, 10, "last",'all').subscribe((data) => {
      this.config = {
        id: "publish",
        currentPage: 1,
        itemsPerPage: 10,
        totalItems: data["count"],
      };
      this.dataSource = data["data"];
    });
  }

  getNoPublish() {
    this.modelService.getData(1, 10, "last",'all', 1).subscribe((data) => {
      this.config = {
        id: "nopublish",
        currentPage: 1,
        itemsPerPage: 10,
        totalItems: data["count"],
      };
      this.dataSource = data["data"];
    });
  }

  changeIsPublish(event, element) {
    let payLoad = element;
    if (event.checked == true) {
      payLoad.is_publish = 0;
    } else {
      payLoad.is_publish = 1;
    }
    this.modelService
      .updateContact(element.id, payLoad)
      .subscribe((data: any) => {
        data;
        //console.log(data)
        if (data.is_publish == 1) {
          this.getNoPublish();
        } else {
          
          this.getPublish();
        }
      });
  }

  pageChange(newPage: number, publish: number) {
    if (publish["is_publish"] == 0) {
      this.loadPublish(newPage, 10, this.currentPage);
      this.router.navigate(["/admin/contact"], {
        queryParams: { page: newPage },
      });
    } else {
      this.loadNoPublish(newPage, 10, this.currentPage);
      this.router.navigate(["/admin/contact"], {
        queryParams: { page: newPage },
      });
    }
  }

  public loadPublish(newPage, pageSize, status) {
    this.currentPage = status;
    this.modelService.getData(newPage, 10, "last",'all').subscribe((data) => {
      data;
      this.config = {
        id: "publish",
        currentPage: newPage,
        itemsPerPage: pageSize,
        totalItems: data["count"],
      };
      this.dataSource = data["data"];
    });
  }

  public loadNoPublish(newPage, pageSize, status) {
    this.currentPage = status;
    this.modelService.getData(newPage, 10, "last",'all', 1).subscribe((data) => {
      this.config = {
        id: "custom",
        currentPage: newPage,
        itemsPerPage: pageSize,
        totalItems: data["count"],
      };
      this.dataSource = data["data"];
    });
  }
  

}
