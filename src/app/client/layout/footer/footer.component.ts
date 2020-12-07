import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FeedbackModalComponent } from '../../../common/feedback-modal/feedback-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  catalogLink = [
    {link:"servis.menu.items1",url:"/catalog/sort-line"},
    {link:"servis.menu.items2",url:"/catalog/sort-line"},
    {link:"servis.menu.items3",url:"/catalog/sort-line"},
    {link:"servis.menu.items4",url:"/catalog/sort-line"},
    {link:"servis.menu.items5",url:"/catalog/sort-line"},
    {link:"servis.menu.items6",url:"/catalog/sort-line"}
  ]

  rawLink = [
    {link:"wood",url:"/raw"},
    {link:"build",url:"/raw"},
    {link:"tires",url:"/raw"},
  ]
  serviceLink = [
    {link:"guarantee",url:"/service"},
    {link:"services",url:"/service"},
  ]

  name:string = "modalName";
  phone:string = "modalPhone";

  openCallBackModal(){
    const dialogRef = this.dialog.open(FeedbackModalComponent, {
     disableClose: false, // для того щоб закривати модалку клікаючи на задній фон
      data: {name: this.name, phone: this.phone} // сюди можна передавати певні дані в модалку, при потребі
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ScrollTo() {
    window.scrollTo({top:0,behavior:'smooth'})

  }


}
