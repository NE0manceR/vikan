import { Component, OnInit, Input } from '@angular/core';
import { TableBody } from 'carbon-components-angular';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackModalComponent } from '../../../common/feedback-modal/feedback-modal.component';


@Component({
  selector: 'call-btn',
  templateUrl: './call-btn.component.html',
  styleUrls: ['./call-btn.component.scss'],
})
export class CallBtnComponent implements OnInit {
  @Input() class;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}


  testFunction() {
    console.log('h1');

  }

  showModal = true;
  name:string = "modalName";
  phone:string = "modalPhone"


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
