import { Component, OnInit } from '@angular/core';
import {FeedbackModalComponent} from "../../common/feedback-modal/feedback-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  cardInfo = [
    {machine:"sort.line",img:"./../../../assets/images/catalog/mashine2.png"},
    {machine:"spare.parts",img:"./../../../assets/images/catalog/parts.jpg"},
    {machine:"conveyors",img:"./../../../assets/images/catalog/convoer.jpg"},
    {machine:"shredders",img:"./../../../assets/images/catalog/shredders.jpg"},
]

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  name = "modalName";
  phone = "modalPhone";

  openCallBackModal() {
    const dialogRef = this.dialog.open(FeedbackModalComponent, {
      disableClose: false, // для того щоб закривати модалку клікаючи на задній фон
      data: {name: this.name, phone: this.phone} // сюди можна передавати певні дані в модалку, при потребі
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }



}
