import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FeedbackModalComponent} from "../../../common/feedback-modal/feedback-modal.component";

@Component({
  selector: 'app-item-catalog',
  templateUrl: './item-catalog.component.html',
  styleUrls: ['./item-catalog.component.scss']
})
export class ItemCatalogComponent implements OnInit {

  itemLink;
  itemGrey;
  itemBlue;
  itemLinkText;
  uderlineWrap;
  itemLinkWrap;
  itemIndex = 0;

  table;
  tableWrap;

  urlArray = [
    "./../../../assets/images/processing/1.png",
    "./../../../assets/images/processing/2.png"
  ]

  nameArray = [
    "wood",
    "bio",
    "build",
    "steal",
    "tires",
    "build"
  ]

  constructor(public dialog: MatDialog) {
  }


  ngOnInit() {
  }

  itemResetUnderline() {
    this.itemLink = document.querySelectorAll('.item-Link');
    this.itemGrey = document.querySelectorAll('.item-grey-underline');
    this.itemBlue = document.querySelectorAll('.item-blue-underline');
  }


  checkHeightblock() {
    this.table = document.querySelector(".table").clientHeight
    this.tableWrap = document.querySelector(".table-wrap")
    if (this.tableWrap.clientHeight < 400) {
      this.tableWrap.style.height = this.table + "px"
      console.log(this.table);
    } else {
      this.tableWrap.style.height = "340px"
    }
  }

  procWrap
  machWrap
  mobWrap
  drawWrap
  desWrap

  changeStyle(event) {
    this.procWrap = document.querySelector(".size").clientHeight
    this.machWrap = document.querySelector(".machine-wrap").clientHeight
    this.mobWrap = document.querySelector(".mobile-wrap").clientHeight
    this.drawWrap = document.querySelector(".drawing-wrap").clientHeight
    this.desWrap = document.querySelector(".des-wrap").clientHeight
    console.log(this.machWrap + this.mobWrap + this.drawWrap + this.desWrap)

    this.itemLink = document.querySelectorAll('.item-Link');
    this.itemGrey = document.querySelectorAll('.item-grey-underline');
    this.itemBlue = document.querySelectorAll('.item-blue-underline');
    this.uderlineWrap = document.querySelectorAll(".item-underline-Wrap")
    this.itemLinkWrap = document.querySelectorAll(".link-wrap")


    for (let i = 0; i < this.itemLink.length; i++) {
      if (event.path[0] == this.itemLink[i]) {
        console.log(event.path[0] == this.itemLink[i]);
        this.itemIndex = i;
      }
      if (event.path[0] == this.itemGrey[i]) {
        this.itemIndex = i;
      }
      if (event.path[0] == this.uderlineWrap[i]) {
        this.itemIndex = i;
      }
      if (event.path[0] == this.itemLinkWrap[i]) {
        this.itemIndex = i;
      }

      this.itemBlue[i].style.width = '0';
      this.itemLink[i].style.fontWeight = 100;
      this.itemGrey[i].style.width = '100%';

    }

    //скролить у потрібний блок
    if (this.itemIndex == 0) {
      window.scrollTo({top: this.machWrap + this.mobWrap, behavior: 'smooth'})
    }
    if (this.itemIndex == 1) {
      window.scrollTo({top: this.machWrap + this.mobWrap + this.drawWrap, behavior: 'smooth'})
    }
    if (this.itemIndex == 2) {
      window.scrollTo({top: this.machWrap + this.mobWrap + this.drawWrap + this.desWrap, behavior: 'smooth'})
    }
    if (this.itemIndex == 3) {
      window.scrollTo({top: this.machWrap + this.mobWrap + this.drawWrap + this.desWrap + this.procWrap, behavior: 'smooth'})
    }

    this.itemGrey[this.itemIndex].style.width = '0';
    this.itemBlue[this.itemIndex].style.width = '100%';
    this.itemLink[this.itemIndex].style.fontWeight = '600';
  }

  photoGalery = [
    {photo: "./../../../../assets/images/item-catalog/3.png"},
    {photo: "./../../../../assets/images/item-catalog/tp270PTO_s_w_min 2.png"},
    {photo: "./../../../../assets/images/item-catalog/2.png"},
    {photo: "./../../../../assets/images/item-catalog/1.png"},
    {photo: "/../../../../assets/images/item-catalog/1.png"},
    {photo: "./../../../../assets/images/item-catalog/1.png"},
    {photo: "./../../../../assets/images/item-catalog/1.png"},
    {photo: "./../../../../assets/images/item-catalog/1.png"},
    {photo: './../../../../assets/images/item-catalog/3.png'}
  ]

  machineDescription = [
    {
      title: "Ударна витривалість в компактному форматі",
      title2: "",
      descriptionAbout: "це універсальний двохвальний промисловий подрібнювач, компактний та мобільний, призначений для первинного подрібнення різного типу матеріалів:"
    },
    {
      title: "Переваги VA5b",
      title2: "Вали",
      descriptionAbout: "це універсальний двохвальний промисловий подрібнювач, компактний та мобільний, призначений для первинного подрібнення різного типу матеріалів:"
    },
    {
      title: "Переваги VA5b",
      title2: "Управління",
      descriptionAbout: "це універсальний двохвальний промисловий подрібнювач, компактний та мобільний, призначений для первинного подрібнення різного типу матеріалів:"
    },
    {
      title: "Переваги VA5b",
      title2: "Привід",
      descriptionAbout: "це універсальний двохвальний промисловий подрібнювач, компактний та мобільний, призначений для первинного подрібнення різного типу матеріалів:"
    },
    {
      title: "Ударна витривалість в компактному форматі",
      title2: "Кузов",
      descriptionAbout: "це універсальний двохвальний промисловий подрібнювач, компактний та мобільний, призначений для первинного подрібнення різного типу матеріалів:"
    },

  ]

  toContent() {


  }


  check() {
    this.itemLink = document.querySelectorAll('.item-Link');
    this.itemGrey = document.querySelectorAll('.item-grey-underline');
    this.itemBlue = document.querySelectorAll('.item-blue-underline');

    if (window.scrollY == 0) {
      for (let h = 0; h < 4; h++) {
        this.itemGrey[h].style.width = '100%';
        this.itemBlue[h].style.width = '0px';
        this.itemLink[h].style.fontWeight = 100;
      }
    }
  }

  name = "ім'я";
  phone = "Номер телефону";

  openCallBackModal() {
    const dialogRef = this.dialog.open(FeedbackModalComponent, {
      disableClose: false, // для того щоб закривати модалку клікаючи на задній фон
      data: {name: this.name, phone: this.phone} // сюди можна передавати певні дані в модалку, при потребі
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


}


