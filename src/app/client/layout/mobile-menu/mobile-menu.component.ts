import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackModalComponent } from '../../../common/feedback-modal/feedback-modal.component';


@Component({
  selector: 'mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  mobileMenuOn = true
  catalogMenu = true


  showModal = true;
  name:string = "ім'я";
  phone:string = "Номер телефону";


  openCallBackModal(){
    const dialogRef = this.dialog.open(FeedbackModalComponent, {
     disableClose: false, // для того щоб закривати модалку клікаючи на задній фон
      data: {name: this.name, phone: this.phone} // сюди можна передавати певні дані в модалку, при потребі
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
