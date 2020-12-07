import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raw',
  templateUrl: './raw.component.html',
  styleUrls: ['./raw.component.scss'],
})
export class RawComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  link;
  grey;
  blue;
  linkText;
  index = 0;

  resetUnderline() {
    this.link = document.querySelectorAll('.rawLink');
    this.grey = document.querySelectorAll('.grey-underline');
    this.blue = document.querySelectorAll('.blue-underline');
    this.grey[0].style.width = '0';
    this.blue[0].style.width = '200%';
    this.link[0].style.fontWeight = '600';
  }

  testFunction(event) {
    this.link = document.querySelectorAll('.rawLink');
    this.grey = document.querySelectorAll('.grey-underline');
    this.blue = document.querySelectorAll('.blue-underline');

    for (let i = 0; i < this.link.length; i++) {
      if (event.path[0] == this.link[i]) {
        this.index = i;
      }
      if (event.path[0] == this.grey[i]) {
        this.index = i;
      }
      this.grey[i].style.width = '100%';
      this.blue[i].style.width = '0';
      this.link[i].style.fontWeight = 100;
    }
    this.grey[this.index].style.width = '0';
    this.blue[this.index].style.width = '100%';
    this.link[this.index].style.fontWeight = '600';
  }

  test = true;
  test2 = 'grey';

  url = './../../../assets/images/production-card/card-photo.png';
  cardName = 'Подрібнювач VB 450 + вториний подрібнювач AS 1500 Е ';
  contentSwitch = 1;

  woodImg = [
    { woodUrl: './../../../assets/images/raw/wood1.png', position: 'img1' },
    { woodUrl: './../../../assets/images/raw/wood2.png', position: 'img2' },
    { woodUrl: './../../../assets/images/raw/wood3.png', position: 'img3' },
    { woodUrl: './../../../assets/images/raw/wood4.png', position: 'img4' },
    { woodUrl: './../../../assets/images/raw/woodBig1.png', position: 'img5' },
    { woodUrl: './../../../assets/images/raw/woodBig2.png', position: 'img6' },
  ];
  bioImg = [
    { bioUrl: './../../../assets/images/raw/bio1.png', position: 'img1' },
    { bioUrl: './../../../assets/images/raw/bio2.png', position: 'img2' },
    { bioUrl: './../../../assets/images/raw/bio3.png', position: 'img3' },
    { bioUrl: './../../../assets/images/raw/bio4.png', position: 'img4' },
    { bioUrl: './../../../assets/images/raw/bio5.png', position: 'img5' },
    { bioUrl: './../../../assets/images/raw/bio6.png', position: 'img6' },
  ];

  buildImg = [
    {
      buildUrl: './../../../assets/images/raw/build/build1.png',
      position: 'buildImg1',
    },
    {
      buildUrl: './../../../assets/images/raw/build/build2.png',
      position: 'buildImg2',
    },
    {
      buildUrl: './../../../assets/images/raw/build/bigBuild3.png',
      position: 'buildImg3',
    },
    {
      buildUrl: './../../../assets/images/raw/build/bigBuild4.png',
      position: 'buildImg4',
    },
  ];

  metalImg = [
    {
      metalUrl: './../../../assets/images/raw/metal/metal1.png',
      position: 'img1',
    },
    {
      metalUrl: './../../../assets/images/raw/metal/metal2.png',
      position: 'img2',
    },
    {
      metalUrl: './../../../assets/images/raw/metal/metal3.png',
      position: 'img3',
    },
    {
      metalUrl: './../../../assets/images/raw/metal/metal4.png',
      position: 'img4',
    },
    {
      metalUrl: './../../../assets/images/raw/metal/metalBig5.png',
      position: 'img5',
    },
    {
      metalUrl: './../../../assets/images/raw/metal/metalBig6.png',
      position: 'img6',
    },
  ];
  tireImg = [
    {
      tireUrl: './../../../assets/images/raw/tire/tireBig1.png',
      position: 'tireImg1',
    },
    {
      tireUrl: './../../../assets/images/raw/tire/tire2.png',
      position: 'tireImg2',
    },
    {
      tireUrl: './../../../assets/images/raw/tire/tire3.png',
      position: 'tireImg3',
    },
  ];


  content1
  content2
  content3
  content4
  content5
 contentIndex
 contentArrey
 show

  changeContent(event) {
  
    this.link = document.querySelectorAll('.rawLink');
    this.grey = document.querySelectorAll('.grey-underline');
    this.blue = document.querySelectorAll('.blue-underline');
    this.content1 = document.querySelectorAll('.content1')
    this.content2 = document.querySelectorAll('.content2')
    this.content3 = document.querySelectorAll('.content3')
    this.content4 = document.querySelectorAll('.content4')
    this.content5 = document.querySelectorAll('.content5')
    this.contentArrey =[this.content1,this.content2,this.content3,this.content4,this.content5]
    
     
    for (let inContent = 0; inContent < this.contentArrey.length; inContent++) {
      
      
      if (event.path[0] == this.link[inContent]) {
        this.contentIndex = inContent
      }  
            
    }
    this.content1[0].style.webkitTransition = "0.3s"
    this.content1[0].style.opacity = "0"
    this.content1[1].style.webkitTransition = "0.3s"
    this.content1[1].style.opacity = "0"
    this.content2[0].style.webkitTransition = "0.3s"
    this.content2[0].style.opacity = "0"
    this.content2[1].style.webkitTransition = "0.3s"
    this.content2[1].style.opacity = "0"
    this.content3[0].style.webkitTransition = "0.3s"
    this.content3[0].style.opacity = "0"
    this.content3[1].style.webkitTransition = "0.3s"
    this.content3[1].style.opacity = "0"
    this.content4[0].style.webkitTransition = "0.3s"
    this.content4[0].style.opacity = "0"
    this.content4[1].style.webkitTransition = "0.3s"
    this.content4[1].style.opacity = "0"
    this.content5[0].style.webkitTransition = "0.3s"
    this.content5[0].style.opacity = "0"
    this.content5[1].style.webkitTransition = "0.3s"
    this.content5[1].style.opacity = "0"
    
    setTimeout(()=>{
    this.content1[0].style.display = "none"
    this.content1[1].style.display = "none"
    this.content2[0].style.display = "none"
    this.content2[1].style.display = "none"
    this.content3[0].style.display = "none"
    this.content3[1].style.display = "none"
    this.content4[0].style.display = "none"
    this.content4[1].style.display = "none"
    this.content5[0].style.display = "none"
    this.content5[1].style.display = "none"
    this.contentArrey[this.contentIndex][1].style.opacity = "0"
    this.contentArrey[this.contentIndex][0].style.opacity = "0"
    this.contentArrey[this.contentIndex][1].style.display = "grid"
    this.contentArrey[this.contentIndex][0].style.display = "grid"
   setTimeout(()=>{
    this.contentArrey[this.contentIndex][1].style.opacity = "1"
    this.contentArrey[this.contentIndex][0].style.opacity = "1"
   },100)

   },500)   
  }
}
