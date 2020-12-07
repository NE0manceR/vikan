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
import { ReversFormSmall } from '../../../../models/admin-models/model.reversFormSmall';
import { ReversFormSmallService } from '../../../../services/admin-services/reversFormSmall';
import { AddReversFormSmallComponent } from '../add-revers-form-small/add-revers-form-small.component';
import { ViewReversFormSmallComponent } from '../view-revers-form-small/view-revers-form-small.component';


@Component({
  selector: 'app-revers-form-small',
  templateUrl: './revers-form-small.component.html',
  styleUrls: ['./revers-form-small.component.scss']
})
export class ReversFormSmallComponent implements OnInit {

  dataSource: any;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  
  eye = faEye;
  config: any;
  currentPage = "last";
  dialog: MatDialog;
  editModel: ReversFormSmall;
  viewModel: ReversFormSmall;
  displedColumns: string[] = [
    "Review",
    "Name",
    "Phone",
    "Options",
  ];
  statusMessage: string;

  constructor(
    private modelService: ReversFormSmallService,
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
  
  
  // view ReversFormSmall
  viewModal(smallForm: ReversFormSmall): void {
    this.viewModel = smallForm;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      smallForm: smallForm,
    };
    const dialogRef = this.dialog.open(ViewReversFormSmallComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getPublish();
    });
  }
  
  // delete ReversFormSmall
  delete(smallForm: ReversFormSmall): void {

    this.modelService.deleteServiceForm(smallForm.id).subscribe((data) => {
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
