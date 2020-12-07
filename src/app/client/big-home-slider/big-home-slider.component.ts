import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-big-home-slider',
  templateUrl: './big-home-slider.component.html',
  styleUrls: ['./big-home-slider.component.scss'],
})
export class BigHomeSliderComponent implements OnInit {
  @ViewChild('sliderBcg', {static: false}) sliderWrap: ElementRef;
  @ViewChild('sliderMachine', {static: false}) sliderCar: ElementRef;
  @ViewChild('sliderText', {static: false}) sliderText: ElementRef;
  @ViewChild('bcgImg', {static: false}) sliderBcg: ElementRef;
  @ViewChild('circle', {static: false}) mySvg: ElementRef;
  @ViewChild('blueX', {static: false}) blueX: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  sliderStatus = true;
  bcgSlider = [
    './../../../assets/images/bigSlider/1.png',
    './../../../assets/images/bigSlider/2.png',
    './../../../assets/images/bigSlider/3.png',
    './../../../assets/images/bigSlider/4.png',
  ];

  autoSlider() {
    setInterval(() => {
      if (this.sliderStatus) {
        this.sliderStatus = false;
        this.circlePosition += 30;

        if (this.circle == 85) {
          this.blueX.nativeElement.style.strokeDashoffset = -94;
          setTimeout(() => {
            this.blueX.nativeElement.style.transition = '0s';
            setTimeout(() => {
              this.blueX.nativeElement.style.strokeDashoffset = 180;
              setTimeout(() => {
                this.blueX.nativeElement.style.transition = '0.3s';
                this.circle = 157;
                this.blueX.nativeElement.style.strokeDashoffset = 157;
                this.sliderNumber = 1;
              }, 20);
            }, 200);
          }, 10);
        } else {
          this.sliderNumber++;
          this.circle -= 24;

          this.blueX.nativeElement.style.strokeDashoffset = this.circle;
        }

        if (this.circlePosition == 162) {
          this.circlePosition = 42;
        }

        this.mySvg.nativeElement.style.left = `${this.circlePosition}px`;

        this.machineIndex++;
        if (this.machineIndex >= 4) {
          this.machineIndex = 0;
        }

        this.sliderCar.nativeElement.classList.add('machine-animation');
        this.sliderText.nativeElement.classList.add('text-animation');
        this.sliderBcg.nativeElement.classList.add('bcg-animation');

        // змінатексту
        setTimeout(() => {
          this.setBcg = this.bcgSlider[this.machineIndex];
          this.setTypeMachine = this.TypeMachine[this.machineIndex];
          this.setMachinePhoto = this.machinePhoto[this.machineIndex];
          this.setSlideText1 = this.SlideDescription[this.machineIndex]
          this.setSlideText2 = this.SlideDescriptionSmall[this.machineIndex]
        }, 500);

        setTimeout(() => {
          this.sliderCar.nativeElement.classList.remove('machine-animation');
          this.sliderText.nativeElement.classList.remove('text-animation');
          this.sliderBcg.nativeElement.classList.remove('bcg-animation');
          setTimeout(() => {
            this.sliderStatus = true;
          }, 500);
        }, 1000);
      }
    }, 6000)
  }

  machineIndex = 0;

  TypeMachine = [
    'bigSliderText1',
    'bigSliderText2',
    'bigSliderText3',
    'bigSliderText4',
  ];

  SlideDescription = [
    'bigSliderDescription1',
    'bigSliderDescription2',
    'bigSliderDescription3',
    'bigSliderDescription4',
  ]

  SlideDescriptionSmall = [
    'bigSliderDescription-1',
    'bigSliderDescription-2',
    'bigSliderDescription-3',
    'bigSliderDescription-4',
  ]

  machinePhoto = [
    './../../../assets/images/bigSlider/car/1.png',
    './../../../assets/images/bigSlider/car/1.png',
    './../../../assets/images/bigSlider/car/1.png',
    './../../../assets/images/bigSlider/car/1.png',
  ];

  setBcg: any = this.bcgSlider[0];

  setMachinePhoto: any = this.machinePhoto[0];
  setTypeMachine: any = this.TypeMachine[0];
  setSlideText1:any = this.SlideDescription[0]
  setSlideText2:any = this.SlideDescriptionSmall[0]

  sliderNumber: number = 1;
  circle: number = 157;

  circlePosition = 42;

  left() {
    if (this.sliderStatus) {
      this.sliderStatus = false;
      this.circlePosition += 30;

      if (this.circle == 85) {
        this.blueX.nativeElement.style.strokeDashoffset = -94;
        setTimeout(() => {
          this.blueX.nativeElement.style.transition = '0s';
          setTimeout(() => {
            this.blueX.nativeElement.style.strokeDashoffset = 180;
            setTimeout(() => {
              this.blueX.nativeElement.style.transition = '0.3s';
              this.circle = 157;
              this.blueX.nativeElement.style.strokeDashoffset = 157;
              this.sliderNumber = 1;
            }, 20);
          }, 200);
        }, 10);
      } else {
        this.sliderNumber++;
        this.circle -= 24;

        this.blueX.nativeElement.style.strokeDashoffset = this.circle;
      }

      if (this.circlePosition == 162) {
        this.circlePosition = 42;
      }

      this.mySvg.nativeElement.style.left = `${this.circlePosition}px`;

      this.machineIndex++;
      if (this.machineIndex >= 4) {
        this.machineIndex = 0;
      }

      this.sliderCar.nativeElement.classList.add('machine-animation');
      this.sliderText.nativeElement.classList.add('text-animation');
      this.sliderBcg.nativeElement.classList.add('bcg-animation');

      // змінатексту
      setTimeout(() => {
        this.setBcg = this.bcgSlider[this.machineIndex];
        this.setTypeMachine = this.TypeMachine[this.machineIndex];
        this.setMachinePhoto = this.machinePhoto[this.machineIndex];
        this.setSlideText1 = this.SlideDescription[this.machineIndex]
        this.setSlideText2 = this.SlideDescriptionSmall[this.machineIndex]
      }, 500);

      setTimeout(() => {
        this.sliderCar.nativeElement.classList.remove('machine-animation');
        this.sliderText.nativeElement.classList.remove('text-animation');
        this.sliderBcg.nativeElement.classList.remove('bcg-animation');
        setTimeout(() => {
          this.sliderStatus = true;
        }, 500);
      }, 1000);
    }
  }

  right() {
    if (this.sliderStatus) {
      this.sliderStatus = false;
      if (this.circlePosition === 42) {
        this.circle = 85;
        this.blueX.nativeElement.style.strokeDashoffset = 85;
        this.mySvg.nativeElement.style.left = `132px`;
        this.circlePosition = 132;

        this.sliderNumber = 4;
        this.machineIndex--;
        if (this.machineIndex < 0) {
          this.machineIndex = 3;
        }

        this.sliderCar.nativeElement.classList.add('machine-animation');
        this.sliderText.nativeElement.classList.add('text-animation');
        this.sliderBcg.nativeElement.classList.add('bcg-animation');

        // змінатексту
        setTimeout(() => {
          this.setBcg = this.bcgSlider[this.machineIndex];
          this.setTypeMachine = this.TypeMachine[this.machineIndex];
          this.setMachinePhoto = this.machinePhoto[this.machineIndex];
          this.setSlideText1 = this.SlideDescription[this.machineIndex]
          this.setSlideText2 = this.SlideDescriptionSmall[this.machineIndex]
        }, 500);

        setTimeout(() => {
          this.sliderCar.nativeElement.classList.remove('machine-animation');
          this.sliderText.nativeElement.classList.remove('text-animation');
          this.sliderBcg.nativeElement.classList.remove('bcg-animation');
          setTimeout(() => {
            this.sliderStatus = true;
          }, 500);
        }, 1000);
        return;
      }

      this.circlePosition -= 30;
      this.sliderNumber--;
      this.circle += 24;

      this.mySvg.nativeElement.style.left = `${this.circlePosition}px`;
      this.blueX.nativeElement.style.strokeDashoffset = this.circle;

      this.machineIndex--;
      if (this.machineIndex < 0) {
        this.machineIndex = 3;
      }

      this.sliderCar.nativeElement.classList.add('machine-animation');
      this.sliderText.nativeElement.classList.add('text-animation');
      this.sliderBcg.nativeElement.classList.add('bcg-animation');

      // змінатексту
      setTimeout(() => {
        this.setBcg = this.bcgSlider[this.machineIndex];
        this.setTypeMachine = this.TypeMachine[this.machineIndex];
        this.setMachinePhoto = this.machinePhoto[this.machineIndex];
        this.setSlideText1 = this.SlideDescription[this.machineIndex]
        this.setSlideText2 = this.SlideDescriptionSmall[this.machineIndex]
      }, 500);

      setTimeout(() => {
        this.sliderCar.nativeElement.classList.remove('machine-animation');
        this.sliderText.nativeElement.classList.remove('text-animation');
        this.sliderBcg.nativeElement.classList.remove('bcg-animation');
        setTimeout(() => {
          this.sliderStatus = true;
        }, 1000);
      }, 1000);
    }
  }

}
