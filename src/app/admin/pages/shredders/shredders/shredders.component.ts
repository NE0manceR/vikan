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
import { CategorySredders } from '../../../../models/admin-models/model.sredders';
import { SreddersService } from '../../../../services/admin-services/sredders.service';
import { AddShreddersComponent } from '../add-shredders/add-shredders.component';
import { ViewShreddersComponent } from '../view-shredders/view-shredders.component';


@Component({
  selector: 'app-shredders',
  templateUrl: './shredders.component.html',
  styleUrls: ['./shredders.component.scss']
})
export class ShreddersComponent implements OnInit {

  dataSource: any;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  lang='all';
  eye = faEye;
  config: any;
  currentPage = "last";
  dialog: MatDialog;
  editModel: CategorySredders;
  viewModel: CategorySredders;
  displedColumns: string[] = [
    "Publish",
    "UA Name",
    "ENG Name",
    "RUS Name",
    "Options",
  ];
  statusMessage: string;
  editCategorySredders: CategorySredders;
  

  constructor(
    private modelService: SreddersService,
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
    this.modelService.getData(1, 10,'last','all').subscribe(data => {
      this.dataSource = data['data'];

    });
  }

  //add Shredder
  addModal() {
    const dialogRef = this.dialog.open(AddShreddersComponent, {
      width: "90%",
      height: "90%",
    });
    dialogRef.afterClosed().subscribe((res) => {
      res;

      this.getNoPublish();
    });
  }

  // edit Shredder
  editModal(shredder: CategorySredders): void {
    this.editCategorySredders = shredder;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      shredder: shredder,
    };
    const dialogRef = this.dialog.open(AddShreddersComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getNoPublish();
    });
  }
  
  
  // view Shredder
  viewModal(shredder: CategorySredders): void {
    this.viewModel = shredder;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      shredder: shredder,
    };
    const dialogRef = this.dialog.open(ViewShreddersComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getPublish();
    });
  }
  
  // delete Shredder
  delete(shredder: CategorySredders): void {

    this.modelService.deleteSredders(shredder.id).subscribe((data) => {
      this.load();
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
      .updateSredders(element.id, payLoad)
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
      this.router.navigate(["/admin/sortline"], {
        queryParams: { page: newPage },
      });
    } else {
      this.loadNoPublish(newPage, 10, this.currentPage);
      this.router.navigate(["/admin/sortline"], {
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
