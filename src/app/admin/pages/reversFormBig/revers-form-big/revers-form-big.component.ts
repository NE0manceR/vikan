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
import { ReversFormBig } from '../../../../models/admin-models/model.reversFormBig';
import { ReversFormBigService } from '../../../../services/admin-services/reversFormBig';
import { AddReversFormBigComponent } from '../add-revers-form-big/add-revers-form-big.component';
import { ViewReversFormBigComponent } from '../view-revers-form-big/view-revers-form-big.component';


@Component({
  selector: 'app-revers-form-big',
  templateUrl: './revers-form-big.component.html',
  styleUrls: ['./revers-form-big.component.scss']
})
export class ReversFormBigComponent implements OnInit {

  dataSource: any;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  
  eye = faEye;
  config: any;
  currentPage = "last";
  dialog: MatDialog;
  editModel: ReversFormBig;
  viewModel: ReversFormBig;
  displedColumns: string[] = [
    "Review",
    "Name",
    "Phone",
    "Email",
    "Options",
  ];
  statusMessage: string;

  constructor(
    private modelService: ReversFormBigService,
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
  // //add ReversFormBig
  // addModal() {
  //   const dialogRef = this.dialog.open(AddReversFormBigComponent, {
  //     width: "90%",
  //     height: "90%",
  //   });
  //   dialogRef.afterClosed().subscribe((res) => {
  //     res;

  //     this.getNoPublish();
  //   });
  // }

  
  // view ReversFormBig
  viewModal(bigForm: ReversFormBig): void {
    this.viewModel = bigForm;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      bigForm: bigForm,
    };
    const dialogRef = this.dialog.open(ViewReversFormBigComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getPublish();
    });
  }
  // // edit ReversFormBig
  // editModal(bigForm: ReversFormBig): void {
  //   this.editModel = bigForm;
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.width = "90%";
  //   dialogConfig.height = "90%";
  //   dialogConfig.data = {
  //     bigForm: bigForm,
  //   };
  //   const dialogRef = this.dialog.open(AddReversFormBigComponent, dialogConfig);
  //   dialogRef.afterClosed().subscribe((data) => {
  //     data;
  //     this.getNoPublish();
  //   });
  // }
  // delete ReversFormBig
  delete(bigForm: ReversFormBig): void {

    this.modelService.deleteServiceForm(bigForm.id).subscribe((data) => {
      this.load();
    });
  }

  close() {
    this.dialog.closeAll();
  }

 

  getPublish() {
    this.modelService.getData(1, 10, "last").subscribe((data) => {
      this.config = {
        id: "review",
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
        id: "noreview",
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
      payLoad.is_review = 0;
    } else {
      payLoad.is_review = 1;
    }
    this.modelService
      .updateServiceForm(element.id, payLoad)
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
