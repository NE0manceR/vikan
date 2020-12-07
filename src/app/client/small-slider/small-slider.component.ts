import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-slider',
  templateUrl: './small-slider.component.html',
  styleUrls: ['./small-slider.component.scss']
})
export class SmallSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mmachineName = [
    "Подрібнювач VB 150 + вториний подрібнювач AS",
    "Подрібнювач VB 260",
    "Подрібнювач VB 360 + вториний подрібнювач KS",
    "Подрібнювач VB 460 + вториний подрібнювач KS",
    "Подрібнювач VB 560 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 660 + вториний подрібнювач KS",
    "Подрібнювач VB 770 + вториний подрібнювач BS"
  ]
  mmachineImg ="./../../../assets/images/small-Slider/sliderImg.png"

  checkWindow
  imgSlidePosition = 0
  setPositon = `translateX(${this.imgSlidePosition}px)`

  resetSlider() {
    this.imgSlidePosition = 0
    this.setPositon = `translateX(${this.imgSlidePosition}px)`
    this.checkWindow = window.innerWidth

  }

  next() {

      if( this.checkWindow <= 580) {
        if ( this.imgSlidePosition <= -266 * (this.mmachineName.length - 1)) {
          this.imgSlidePosition = 0
          this.setPositon = `translateX(${this.imgSlidePosition}px)`
        }else {
          this.imgSlidePosition -=266
          this.setPositon = `translateX(${this.imgSlidePosition}px)`
        }

      }else {

        if ( this.imgSlidePosition <= -350 * (this.mmachineName.length - 1)) {
          this.imgSlidePosition = 0
          this.setPositon = `translateX(${this.imgSlidePosition}px)`
        }else {
          this.imgSlidePosition -=350
          this.setPositon = `translateX(${this.imgSlidePosition}px)`
        }

      }

  }

  prev() {

    if( this.checkWindow <= 580){
      if(this.imgSlidePosition == 0){
        return
      }else {
        this.imgSlidePosition +=266
        this.setPositon = `translateX(${this.imgSlidePosition}px)`
      }

    }else {
      if(this.imgSlidePosition == 0){
        return
      }else {
        this.imgSlidePosition +=350
        this.setPositon = `translateX(${this.imgSlidePosition}px)`
      }

    }


  }



}
