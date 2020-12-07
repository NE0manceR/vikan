import { Component, OnInit, ViewChild } from '@angular/core';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  MatPaginator,
  MatDialogConfig,
  MatDialog,
  MatTableDataSource,
} from "@angular/material";
import {MatTableModule} from '@angular/material/table';
import { AddTechnicalCharacteristicsComponent } from "../add-technical-characteristics/add-technical-characteristics.component";
import { ViewTechnicalCharacteristicsComponent } from "../view-technical-characteristics/view-technical-characteristics.component";
import { Router, ActivatedRoute } from "@angular/router";
import { TechnicalCharacteristics } from '../../../../models/admin-models/model.technicalCharacteristics';
import { TechnicalCharacteristicsService } from '../../../../services/admin-services/technicalCharacteristics.service';


@Component({
  selector: 'app-technical-characteristics',
  templateUrl: './technical-characteristics.component.html',
  styleUrls: ['./technical-characteristics.component.scss']
})
export class TechnicalCharacteristicsComponent implements OnInit {

  dataSource: any;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  config: any;
  eye = faEye;
  lang='all';
  currentPage = "last";
  dialog: MatDialog;
  editModel: TechnicalCharacteristics;
  viewModel: TechnicalCharacteristics;
  displedColumns: string[] = [
    "Publish",
    "Name",
    "DescUa",
    "TypeUa",
    "Options",
  ];
  statusMessage: string;
  constructor(
    private modelService: TechnicalCharacteristicsService,
    dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    
  ) {this.dialog = dialog; }

  ngOnInit() {
    this.getPublish();
  }

  public load() {
    this.modelService.getData(1, 10,'last','all').subscribe(data => {
      this.dataSource = data['data'];

    });
  }

   //add
   addModal() {
    const dialogRef = this.dialog.open(AddTechnicalCharacteristicsComponent, {
      width: "90%",
      height: "90%",
    });
    dialogRef.afterClosed().subscribe((res) => {
      res;

      this.getPublish();
    });
  }

 
  // view
  viewModal(model: TechnicalCharacteristics): void {
    this.viewModel = model;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      model: model,
    };
    const dialogRef = this.dialog.open(ViewTechnicalCharacteristicsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;

      this.getPublish();
    });
  }
  // editModal
  editModal(model: TechnicalCharacteristics): void {
    this.editModel = model;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      model: model,
    };
    const dialogRef = this.dialog.open(AddTechnicalCharacteristicsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getNoPublish();
    });
  }
  // delete 
  delete(model: TechnicalCharacteristics): void {

    this.modelService.deleteTech(model.id).subscribe((data) => {
      this.load();
    });
  }

  close() {
    this.dialog.closeAll();
  }

 

  getPublish() {
    this.modelService.getData(1, 10,'last','all').subscribe((data) => {
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
    this.modelService.getData(1, 10, 'last','all', 1).subscribe((data) => {
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
      .updateTech(element.id, payLoad)
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
      this.loadPublish(newPage, 10, this.currentPage,this.lang);
      this.router.navigate(["/admin/model"], {
        queryParams: { page: newPage },
      });
    } else {
      this.loadNoPublish(newPage, 10, this.currentPage,this.lang);
      this.router.navigate(["/admin/model"], {
        queryParams: { page: newPage },
      });
    }
  }

  public loadPublish(newPage, pageSize, status,lang) {
    this.currentPage = status;
    this.modelService.getData(newPage, 10, "last",lang).subscribe((data) => {
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

  public loadNoPublish(newPage, pageSize, status,lang) {
    this.currentPage = status;
    this.modelService.getData(newPage, 10, "last",lang, 1).subscribe((data) => {
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
