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
import { ServiceTitle } from '../../../../models/admin-models/model.serviceTitle';
import { ServiceTitleService } from '../../../../services/admin-services/serviceTitle.service';
import { AddServiceTitleComponent } from '../add-service-title/add-service-title.component';
import { ViewServiceTitleComponent } from '../view-service-title/view-service-title.component';


@Component({
  selector: 'app-service-title',
  templateUrl: './service-title.component.html',
  styleUrls: ['./service-title.component.scss']
})
export class ServiceTitleComponent implements OnInit {

  dataSource: any;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  
  eye = faEye;
  config: any;
  currentPage = "last";
  dialog: MatDialog;
  editModel: ServiceTitle;
  viewModel: ServiceTitle;
  displedColumns: string[] = [
    "Publish",
    "Email",
    "Mobile",
    "Phone",
    "Options",
  ];
  statusMessage: string;
  editServiceTitle: ServiceTitle;

  constructor(
    private modelService: ServiceTitleService,
    dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    
  ) {
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.getPublish();
  }

  public load() {
    this.modelService.getData(1, 10,'last').subscribe(data => {
      this.dataSource = data['data'];

    });
  }

  //add ServiceTitle
  addModal() {
    const dialogRef = this.dialog.open(AddServiceTitleComponent, {
      width: "90%",
      height: "90%",
    });
    dialogRef.afterClosed().subscribe((res) => {
      res;

      this.getNoPublish();
    });
  }

  // edit ServiceTitle
  editModal(title: ServiceTitle): void {
    this.editServiceTitle = title;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      title: title,
    };
    const dialogRef = this.dialog.open(AddServiceTitleComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getNoPublish();
    });
  }
  
  
  // view ServiceTitle
  viewModal(title: ServiceTitle): void {
    this.viewModel = title;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      title: title,
    };
    const dialogRef = this.dialog.open(ViewServiceTitleComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getPublish();
    });
  }
  
  // delete ServiceTitle
  delete(title: ServiceTitle): void {

    this.modelService.deleteServiceTitle(title.id).subscribe((data) => {
      this.load();
    });
  }

  close() {
    this.dialog.closeAll();
  }

 

  getPublish() {
    this.modelService.getData(1, 10, "last").subscribe((data) => {
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
    this.modelService.getData(1, 10, "last", 1).subscribe((data) => {
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
      .updateServiceTitle(element.id, payLoad)
      .subscribe((data: any) => {
        data;
        //console.log(data)
        if (data.is_review == 1) {
          this.getNoPublish();
        } else {
          
          this.getPublish();
        }
      });
  }

  pageChange(newPage: number, publish: number) {
    if (publish["is_publish"] == 0) {
      this.loadPublish(newPage, 10, this.currentPage);
      this.router.navigate(["/admin/bigform"], {
        queryParams: { page: newPage },
      });
    } else {
      this.loadNoPublish(newPage, 10, this.currentPage);
      this.router.navigate(["/admin/bigform"], {
        queryParams: { page: newPage },
      });
    }
  }

  public loadPublish(newPage, pageSize, status) {
    this.currentPage = status;
    this.modelService.getData(newPage, 10, "last").subscribe((data) => {
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
    this.modelService.getData(newPage, 10, "last", 1).subscribe((data) => {
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
