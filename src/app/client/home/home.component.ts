import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';
import {FeedbackModalComponent} from './../../common/feedback-modal/feedback-modal.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild('bcgImgSlider', {static: false}) changeImg: ElementRef

  constructor(public dialog: MatDialog) {
  }

  public innerWidth: any;

  ngOnInit() {
  }

  showBlock = true;
  sliderPosition = 0;
  setPosition = `translateX(${this.sliderPosition}px)`;
  textPosition = 0;
  setTextPosition = `translateY(${this.textPosition}px)`;

  bigSliderBcg = [
    "./../../../assets/images/bigSlider/3.png",
    "./../../../assets/images/bigSlider/4.png",
    "./../../../assets/images/bigSlider/2.png",
    "./../../../assets/images/bigSlider/1.png",
  ]
  bigSliderText = [
    {mshineType: 'Подрібнювачі', about1: 'Дозволяє переробляти тверді габаритні матеріали'},
    {mshineType: 'Сортувальні лінії', about1: 'Дозволяє переробляти тверді габаритні матеріали'},
    {mshineType: 'Транспортери', about1: 'Дозволяє переробляти тверді габаритні матеріали'},
    {mshineType: 'Запчастини', about1: 'Дозволяє переробляти тверді габаритні матеріали'}

  ]
  bcgImg = this.bigSliderBcg[0]
  bcgImgIndex = 0

  // moveSlideRight() {
  //
  //   this.innerWidth = window.innerWidth;
  //   if (this.sliderPosition == 0) {
  //
  //     return;
  //   } else {
  //
  //     if (this.innerWidth < 583) {
  //       setTimeout(() => {
  //         this.changeImg.nativeElement.style.opacity = 0
  //         setTimeout(() => {
  //           this.bcgImgIndex--
  //           this.bcgImg = this.bigSliderBcg[this.bcgImgIndex]
  //           this.changeImg.nativeElement.style.opacity = 1
  //         }, 300)
  //       }, 10)
  //       this.sliderPosition += 260;
  //       this.textPosition += 218;
  //       this.setPosition = `translateX(${this.sliderPosition}px)`;
  //       this.setTextPosition = `translateY(${this.textPosition}px)`;
  //       return
  //
  //     }
  //
  //     if (this.innerWidth < 854) {
  //       this.sliderPosition += 320;
  //     } else {
  //       this.sliderPosition += 460;
  //     }
  //
  //     setTimeout(() => {
  //       this.changeImg.nativeElement.style.opacity = 0
  //       setTimeout(() => {
  //         this.bcgImgIndex--
  //         this.bcgImg = this.bigSliderBcg[this.bcgImgIndex]
  //         this.changeImg.nativeElement.style.opacity = 1
  //       }, 300)
  //     }, 10)
  //     this.textPosition += 218;
  //     this.setPosition = `translateX(${this.sliderPosition}px)`;
  //     this.setTextPosition = `translateY(${this.textPosition}px)`;
  //
  //
  //   }
  //
  // }

  // moveSlideLeft() {
  //   this.innerWidth = window.innerWidth;
  //   if (this.innerWidth < 583) {
  //     if (this.sliderPosition == -780) {
  //       return
  //     }
  //
  //     setTimeout(() => {
  //       this.changeImg.nativeElement.style.opacity = 0
  //       setTimeout(() => {
  //         this.bcgImgIndex++
  //         this.bcgImg = this.bigSliderBcg[this.bcgImgIndex]
  //         this.changeImg.nativeElement.style.opacity = 1
  //       }, 300)
  //     }, 10)
  //     this.sliderPosition -= 260;
  //     this.textPosition -= 218;
  //     this.setPosition = `translateX(${this.sliderPosition}px)`;
  //     this.setTextPosition = `translateY(${this.textPosition}px)`;
  //     return
  //   }
  //
  //   if (this.innerWidth < 854) {
  //
  //
  //     console.log(this.setPosition);
  //     if (this.sliderPosition == -960) {
  //       return
  //     } else {
  //       this.sliderPosition -= 320;
  //     }
  //   }
  //
  //   if (this.innerWidth > 854) {
  //
  //     if (this.sliderPosition == -1380) {
  //       return
  //     } else {
  //       this.sliderPosition -= 460;
  //     }
  //
  //   }
  //
  //
  //   setTimeout(() => {
  //     this.changeImg.nativeElement.style.opacity = 0
  //     setTimeout(() => {
  //       this.bcgImgIndex++
  //       this.bcgImg = this.bigSliderBcg[this.bcgImgIndex]
  //       this.changeImg.nativeElement.style.opacity = 1
  //     }, 300)
  //   }, 10)
  //
  //   this.textPosition -= 218;
  //   this.setPosition = `translateX(${this.sliderPosition}px)`;
  //   this.setTextPosition = `translateY(${this.textPosition}px)`;
  //
  // }

  resetSize() {
    this.sliderPosition = 0
    this.textPosition = 0
    console.log(this.sliderPosition);
    this.setPosition = `translateX(${this.sliderPosition}px)`;
    this.setTextPosition = `translateY(${this.textPosition}px)`;
    this.bcgImgIndex = 0
    this.bcgImg = this.bigSliderBcg[0]
  }

  name = "ім'я";
  phone = "Номер телефону";

  openCallBackModal() {
    const dialogRef = this.dialog.open(FeedbackModalComponent, {
      disableClose: false, // для того щоб закривати модалку клікаючи на задній фон
      data: {name: this.name, phone: this.phone} // сюди можна передавати певні дані в модалку, при потребі
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  // плавний текс та картинок в блоці про компанію
  aboutTitle
  aboutText
  checkText: boolean = false
  aboutBtn
  factContent
  boxInfo


  showAbout() {
    this.factContent = document.querySelectorAll('.factContent')
    this.boxInfo = document.querySelectorAll('.boxInfo')


    setTimeout(() => {

      setTimeout(() => {
        this.factContent[0].style.opacity = 0
        setTimeout(() => {
          this.factContent[1].style.opacity = 0
          setTimeout(() => {
            this.factContent[2].style.opacity = 0
            setTimeout(() => {
              this.factContent[3].style.opacity = 0
              setTimeout(() => {
                this.factContent[4].style.opacity = 0
                setTimeout(() => {
                  this.factContent[5].style.opacity = 0
                  setTimeout(() => {
                    for (let indexImg2 = 0; indexImg2 < 6; indexImg2++) {
                      this.factContent[indexImg2].style.display = 'none'
                    }
                    setTimeout(() => {
                      for (let indeximg3 = 0; indeximg3 < 5; indeximg3++) {
                        this.boxInfo[indeximg3].style.display = 'grid'
                        this.boxInfo[indeximg3].style.webkitTransition = '1s'
                      }

                      this.boxInfo[0].style.opacity = 1
                      setTimeout(() => {
                        this.boxInfo[1].style.opacity = 1
                        setTimeout(() => {
                          this.boxInfo[2].style.opacity = 1
                          setTimeout(() => {
                            this.boxInfo[3].style.opacity = 1
                            setTimeout(() => {
                              this.boxInfo[4].style.opacity = 1
                            }, 210)
                          }, 190)
                        }, 170)
                      }, 150)
                    })
                  })
                }, 190)
              }, 170)
            }, 150)
          }, 120)
        }, 10)
      }, 80)
    })


    // плавний текс в блоці про компанію
    this.aboutBtn = document.querySelector('.btnMoreInfo')
    this.aboutTitle = document.querySelectorAll('.title')
    this.aboutText = document.querySelectorAll('.textInfo')
    this.aboutTitle[0].style.webkitTransition = "0.3s"
    this.aboutText[0].style.webkitTransition = "0.3s"
    this.aboutTitle[1].style.webkitTransition = "0.3s"
    this.aboutText[1].style.webkitTransition = "0.3s"

    if (this.checkText == true) {
      console.log(this.checkText);
      this.aboutBtn.style.opacity = 0
      this.aboutTitle[1].style.opacity = 0
      this.aboutText[1].style.opacity = 0
      setTimeout(() => {
        this.aboutTitle[1].style.display = "none"
        this.aboutText[1].style.display = "none"
        this.aboutTitle[0].style.display = "block"
        this.aboutText[0].style.display = "block"
        this.aboutTitle[0].style.opacity = 0
        this.aboutText[0].style.opacity = 0
        setTimeout(() => {
          this.aboutTitle[0].style.opacity = 1
          this.aboutText[0].style.opacity = 1
          this.aboutBtn.style.opacity = 1
          this.checkText = false
        }, 200)
      }, 400)

    }

  }

  showAbout2() {
    this.factContent = document.querySelectorAll('.factContent')
    this.boxInfo = document.querySelectorAll('.boxInfo')


    this.boxInfo[0].style.opacity = 0
    setTimeout(() => {
      this.boxInfo[1].style.opacity = 0
      setTimeout(() => {
        this.boxInfo[2].style.opacity = 0
        setTimeout(() => {
          this.boxInfo[3].style.opacity = 0
          setTimeout(() => {
            this.boxInfo[4].style.opacity = 0
            setTimeout(() => {
              for (let indexImg = 0; indexImg < 5; indexImg++) {
                this.boxInfo[indexImg].style.display = 'none'
                setTimeout(() => {
                  for (let indexcontent = 0; indexcontent < 6; indexcontent++) {
                    this.factContent[indexcontent].style.display = 'grid'
                    this.factContent[indexcontent].style.webkitTransition = '0.3s'
                  }
                  setTimeout(() => {
                    this.factContent[0].style.opacity = 1
                    setTimeout(() => {
                      this.factContent[1].style.opacity = 1
                      setTimeout(() => {
                        this.factContent[2].style.opacity = 1
                        setTimeout(() => {
                          this.factContent[3].style.opacity = 1
                          setTimeout(() => {
                            this.factContent[4].style.opacity = 1
                            setTimeout(() => {
                              this.factContent[5].style.opacity = 1
                            }, 190)
                          }, 170)
                        }, 150)
                      }, 120)
                    }, 10)
                  }, 80)
                }, 50)

              }
            }, 50)
          }, 20)
        }, 40)
      }, 60)
    }, 80)


    // плавний текс в блоці про компанію
    this.aboutBtn = document.querySelector('.btnMoreInfo')
    this.aboutTitle = document.querySelectorAll('.title')
    this.aboutText = document.querySelectorAll('.textInfo')
    this.aboutTitle[0].style.webkitTransition = "0.3s"
    this.aboutText[0].style.webkitTransition = "0.3s"
    this.aboutTitle[1].style.webkitTransition = "0.3s"
    this.aboutText[1].style.webkitTransition = "0.3s"

    if (this.checkText == false) {
      this.aboutBtn.style.opacity = 0
      this.aboutTitle[0].style.opacity = 0
      this.aboutText[0].style.opacity = 0
      setTimeout(() => {
        this.aboutTitle[0].style.display = "none"
        this.aboutText[0].style.display = "none"
        this.aboutTitle[1].style.display = "block"
        this.aboutText[1].style.display = "block"
        this.aboutTitle[1].style.opacity = 0
        this.aboutText[1].style.opacity = 0
        setTimeout(() => {
          this.aboutTitle[1].style.opacity = 1
          this.aboutText[1].style.opacity = 1
          this.aboutBtn.style.opacity = 1
          this.checkText = true

        }, 200)
      }, 400)
    }
  }

}
