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
import { Questions } from '../../../../models/admin-models/model.questions';
import { QuestionsService } from '../../../../services/admin-services/questions.service';
import { AddPopularQuestionComponent } from '../add-popular-question/add-popular-question.component';
import { ViewPopularQuestionComponent } from '../view-popular-question/view-popular-question.component';


@Component({
  selector: 'app-popular-question',
  templateUrl: './popular-question.component.html',
  styleUrls: ['./popular-question.component.scss']
})
export class PopularQuestionComponent implements OnInit {

  dataSource: any;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  lang='all';
  eye = faEye;
  config: any;
  currentPage = "last";
  dialog: MatDialog;
  editModel: Questions;
  viewModel: Questions;
  displedColumns: string[] = [
    "Publish",
    "UA Question",
    "UA Answer",
    "Options",
  ];
  statusMessage: string;

  constructor(
    private modelService: QuestionsService,
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
    const dialogRef = this.dialog.open(AddPopularQuestionComponent, {
      width: "90%",
      height: "90%",
    });
    dialogRef.afterClosed().subscribe((res) => {
      res;

      this.getNoPublish();
    });
  }

  
  // view question
  viewModal(question: Questions): void {
    this.viewModel = question;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      question: question,
    };
    const dialogRef = this.dialog.open(ViewPopularQuestionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getPublish();
    });
  }
  // edit question
  editModal(question: Questions): void {
    this.editModel = question;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";
    dialogConfig.data = {
      question: question,
    };
    const dialogRef = this.dialog.open(AddPopularQuestionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      data;
      this.getNoPublish();
    });
  }
  // delete question
  delete(question: Questions): void {

    this.modelService.deleteQuestions(question.id).subscribe((data) => {
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
      .updateQuestions(element.id, payLoad)
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
      this.router.navigate(["/admin/questions"], {
        queryParams: { page: newPage },
      });
    } else {
      this.loadNoPublish(newPage, 10, this.currentPage);
      this.router.navigate(["/admin/questions"], {
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
