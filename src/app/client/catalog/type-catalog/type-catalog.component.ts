import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-type-catalog',
  templateUrl: './type-catalog.component.html',
  styleUrls: ['./type-catalog.component.scss']
})
export class TypeCatalogComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }


  url = "./../../../assets/images/production-card/card-photo.png"
  cardName = "Подрібнювач VB 450 + вториний подрібнювач AS 1500 Е "


  sortLines = [
    {name: "Zusammenbau1", url: "./../../../../assets/images/sort-line/Zusammenbau3.JPG"},
    {name: "Zusammenbau2", url: "./../../../../assets/images/sort-line/Zusammenbau3.JPG"},
    {name: "Zusammenbau3", url: "./../../../../assets/images/sort-line/Zusammenbau3.JPG"},
    {name: "Zusammenbau4", url: "./../../../../assets/images/sort-line/Zusammenbau3.JPG"},
    {name: "Zusammenbau5", url: "./../../../../assets/images/sort-line/Zusammenbau3.JPG"},
    {name: "Zusammenbau6", url: "./../../../../assets/images/sort-line/Zusammenbau3.JPG"},
    {name: "ЛС-8_12", url: "./../../../../assets/images/sort-line/Zusammenbau3.JPG"}
  ]


  link;
  grey;
  blue;
  linkText;
  index = 0;
  cardWrap
  humus = true
  garbage = true

  fallenLeaves = true
  wooden = true
  catalyst = true
  rubbish = true
  ferroconcrete = true
  electronics = true


  testFunction(event) {
    this.link = document.querySelectorAll('.rawLink');
    this.grey = document.querySelectorAll('.grey-underline');
    this.blue = document.querySelectorAll('.blue-underline');
    this.cardWrap = document.querySelector('.card-wrap');

    setTimeout(() => {
      this.cardWrap.style.opacity = 0
      setTimeout(() => {
        this.cardWrap.style.opacity = 1
      }, 500)
    })

    for (let i = 0; i < this.link.length; i++) {
      if (event.path[0] == this.link[i]) {
        this.index = i;
      }
      if (event.path[0] == this.grey[i]) {
        this.index = i;
      }

      setTimeout(() => {
        this.cardWrap.style.opacity = 0
        setTimeout(() => {
          if (this.index == 0) {
            this.fallenLeaves = true
            this.wooden = true
            this.catalyst = true
            this.rubbish = true
            this.ferroconcrete = true
            this.electronics = true


          }
          if (this.index == 1) {
            this.fallenLeaves = true
            this.wooden = false
            this.catalyst = false
            this.rubbish = false
            this.ferroconcrete = false
            this.electronics = false

          }
          if (this.index == 2) {
            this.fallenLeaves = false
            this.wooden = true
            this.catalyst = false
            this.rubbish = false
            this.ferroconcrete = false
            this.electronics = false
          }

          if (this.index == 3) {
            this.fallenLeaves = false
            this.wooden = false
            this.catalyst = true
            this.rubbish = false
            this.ferroconcrete = false
            this.electronics = false
          }
          if (this.index == 4) {
            this.fallenLeaves = false
            this.wooden = false
            this.catalyst = false
            this.rubbish = true
            this.ferroconcrete = false
            this.electronics = false
          }
          if (this.index == 5) {
            this.fallenLeaves = false
            this.wooden = false
            this.catalyst = false
            this.rubbish = false
            this.ferroconcrete = true
            this.electronics = false
          }
          if (this.index == 6) {
            this.fallenLeaves = false
            this.wooden = false
            this.catalyst = false
            this.rubbish = false
            this.ferroconcrete = false
            this.electronics = true
          }
          this.cardWrap.style.opacity = 1

        }, 500)
      })


      this.grey[i].style.width = '100%';
      this.blue[i].style.width = '0';
      this.link[i].style.fontWeight = 100;
    }
    this.grey[this.index].style.width = '0';
    this.blue[this.index].style.width = '100%';
    this.link[this.index].style.fontWeight = '600';
  }

}
