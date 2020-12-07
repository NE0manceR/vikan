import { Component, OnInit, ViewChild } from '@angular/core';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  MatPaginator,
  MatDialogConfig,
  MatDialog,
  MatTableDataSource,
} from "@angular/material";
import {MatTableModule} from '@angular/material/table';
import { AddAboutComponent } from "../add-about/add-about.component";
import { ViewAboutComponent } from "../view-about/view-about.component";
import { Router, ActivatedRoute } from "@angular/router";
import { About } from '../../../../models/admin-models/model.about';
import { AboutService } from '../../../../services/admin-services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {
  dataSource: any;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  config: any;
  eye = faEye;
  lang='all';
  currentPage = "last";
  dialog: MatDialog;
  editAbout: About;
  viewAbout: About;
  displedColumns: string[] = [
    "Publish",
    "Title",
    "NumberTitle",
    "FactTitle",
    "Options",
  ];
  statusMessage: string;
  constructor(
    private aboutService: AboutService,
    dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    
  ) {this.dialog = dialog; }

  ngOnInit() {
    this.getPublish();
  }

  public loadAbout() {
    this.aboutService.getData(1, 10,'last','all').subscribe(data => {
      this.dataSource = data['data'];

    });
  }

   //add
   addAbout() {
    const dialogRef = this.dialog.open(AddAboutComponent, {
      width: "90%",
      height: "90%",
    });
    dialogRef.afterClosed().subscribe((res) => {
      res;

      this.getPublish();
    });
  }

 
  // view
  viewModal(about: About): void {
    this.viewAbout = about;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      about: about,
    };
    const dialogRef = this.dialog.open(ViewAboutComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;

      this.getPublish();
    });
  }
  
  // editModal
  editModal(about: About): void {
    this.editAbout = about;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      about: about,
    };
    const dialogRef = this.dialog.open(AddAboutComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getNoPublish();
    });
  }

  // delete 
  deleteAbout(about: About): void {

    this.aboutService.deleteAbout(about.id).subscribe((data) => {
      this.loadAbout();
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
      .updateAbout(element.id, payLoad)
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
      this.router.navigate(["/admin/about"], {
        queryParams: { page: newPage },
      });
    } else {
      this.loadNoPublish(newPage, 10, this.currentPage);
      this.router.navigate(["/admin/about"], {
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
