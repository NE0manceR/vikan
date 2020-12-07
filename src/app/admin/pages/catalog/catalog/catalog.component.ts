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
import { Catalog } from '../../../../models/admin-models/model.catalog';
import { CatalogService } from '../../../../services/admin-services/catalog.service';
import { AddCatalogComponent } from '../add-catalog/add-catalog.component';
import { ViewCatalogComponent } from '../view-catalog/view-catalog.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  dataSource: any;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  lang='all';
  eye = faEye;
  config: any;
  currentPage = "last";
  dialog: MatDialog;
  editCatalog: Catalog;
  viewCatalog: Catalog;
  displedColumns: string[] = [
    "Publish",
    "NameUA",
    "NameENG",
    "NameRUS",
    "Options",
  ];
  statusMessage: string;

  constructor(
    private catalogService: CatalogService,
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
    this.catalogService.getData(1, 10,'last','all').subscribe(data => {
      this.dataSource = data['data'];

    });
  }
  //add catalog
  addModal() {
    const dialogRef = this.dialog.open(AddCatalogComponent, {
      width: "90%",
      height: "90%",
    });
    dialogRef.afterClosed().subscribe((res) => {
      res;

      this.getNoPublish();
    });
  }

  
  // view catalog
  viewModal(catalog: Catalog): void {
    this.viewCatalog = catalog;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      catalog: catalog,
    };
    const dialogRef = this.dialog.open(ViewCatalogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;

      this.getPublish();
    });
  }
  // edit catalog
  editModal(catalog: Catalog): void {
    this.editCatalog = catalog;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      catalog: catalog,
    };
    const dialogRef = this.dialog.open(AddCatalogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getNoPublish();
    });
  }
  // delete catalog
  delete(catalog: Catalog): void {

    this.catalogService.deleteCatalog(catalog.id).subscribe((data) => {
      this.loadCatalog();
    });
  }

  close() {
    this.dialog.closeAll();
  }

 

  getPublish() {
    this.catalogService.getData(1, 10, "last",'all').subscribe((data) => {
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
    this.catalogService.getData(1, 10, "last",'all', 1).subscribe((data) => {
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
    this.catalogService
      .updateCatalog(element.id, payLoad)
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
      this.router.navigate(["/admin/catalog"], {
        queryParams: { page: newPage },
      });
    } else {
      this.loadNoPublish(newPage, 10, this.currentPage);
      this.router.navigate(["/admin/catalog"], {
        queryParams: { page: newPage },
      });
    }
  }

  public loadPublish(newPage, pageSize, status) {
    this.currentPage = status;
    this.catalogService.getData(newPage, 10, "last",'all').subscribe((data) => {
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
    this.catalogService.getData(newPage, 10, "last",'all', 1).subscribe((data) => {
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
