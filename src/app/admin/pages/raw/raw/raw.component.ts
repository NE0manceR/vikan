import { Component, OnInit, ViewChild } from '@angular/core';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  MatPaginator,
  MatDialogConfig,
  MatDialog,
  MatTableDataSource,
} from "@angular/material";
import {MatTableModule} from '@angular/material/table';
import { AddRawComponent } from "../add-raw/add-raw.component";
import { ViewRawComponent } from "../view-raw/view-raw.component";
import { Router, ActivatedRoute } from "@angular/router";
import { Raw } from '../../../../models/admin-models/model.raw';
import { RawService } from '../../../../services/admin-services/raw.service';


@Component({
  selector: 'app-raw',
  templateUrl: './raw.component.html',
  styleUrls: ['./raw.component.scss']
})
export class RawComponent implements OnInit {

  dataSource: any;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  config: any;
  eye = faEye;
  lang='all';
  currentPage = "last";
  dialog: MatDialog;
  editRaw: Raw;
  viewRaw: Raw;
  displedColumns: string[] = [
    "Publish",
    "NameUA",
    "NameENG",
    "NameRUS",
    "Options",
  ];
  statusMessage: string;
  constructor(
    private aboutService: RawService,
    dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    
  ) {this.dialog = dialog; }

  ngOnInit() {
    this.getPublish();
  }

  public loadRaw() {
    this.aboutService.getData(1, 10,'last','all').subscribe(data => {
      this.dataSource = data['data'];

    });
  }

   //add
   addModal() {
    const dialogRef = this.dialog.open(AddRawComponent, {
      width: "90%",
      height: "90%",
    });
    dialogRef.afterClosed().subscribe((res) => {
      res;

      this.getPublish();
    });
  }

 
  // view
  viewModal(raw: Raw): void {
    this.viewRaw = raw;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      raw: raw,
    };
    const dialogRef = this.dialog.open(ViewRawComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;

      this.getPublish();
    });
  }
  // editModal
  editModal(raw: Raw): void {
    this.editRaw = raw;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      raw: raw,
    };
    const dialogRef = this.dialog.open(AddRawComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getNoPublish();
    });
  }
  // delete 
  delete(raw: Raw): void {

    this.aboutService.deleteRaw(raw.id).subscribe((data) => {
      this.loadRaw();
    });
  }

  close() {
    this.dialog.closeAll();
  }

 

  getPublish() {
    this.aboutService.getData(1, 10,'last','all').subscribe((data) => {
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
    this.aboutService.getData(1, 10, 'last','all', 1).subscribe((data) => {
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
    this.aboutService
      .updateRaw(element.id, payLoad)
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
      this.router.navigate(["/admin/raw"], {
        queryParams: { page: newPage },
      });
    } else {
      this.loadNoPublish(newPage, 10, this.currentPage);
      this.router.navigate(["/admin/raw"], {
        queryParams: { page: newPage },
      });
    }
  }

  public loadPublish(newPage, pageSize, status) {
    this.currentPage = status;
    this.aboutService.getData(newPage, 10, "last","all").subscribe((data) => {
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
    this.aboutService.getData(newPage, 10, "last","all", 1).subscribe((data) => {
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
