import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acording',
  templateUrl: './acording.component.html',
  styleUrls: ['./acording.component.scss']
})
export class AcordingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  wrap;
  index = 0;
  questionBtn
  blueBorder
  greyBorder
  icon
  svgIcon
  svgWrap
  questionWrap

  showAnswer(event) {

    this.wrap = document.querySelectorAll('.wrap')
    this.questionBtn = document.querySelectorAll('.question-btn')
    this.blueBorder = document.querySelectorAll('.blue-border')
    this.greyBorder = document.querySelectorAll('.grey-border')
    this.icon = document.querySelectorAll('.question-icon')
    this.svgIcon = document.querySelectorAll('.svg-icon')
    this.svgWrap = document.querySelectorAll('.svg-wrap')
    this.questionWrap = document.querySelectorAll('.question-wrap')

    for (let i = 0; i < this.questionBtn.length; i++) {

      if (event.target.classList[1] == "open") {
        this.questionBtn[this.index].classList.remove("open")
        this.svgIcon[this.index].classList.remove("open")
        this.svgWrap[this.index].classList.remove("open")
        this.wrap[this.index].style.height = 0
        this.blueBorder[this.index].style.width = 0
        this.greyBorder[this.index].style.width = "100%";
        this.icon[this.index].style.transform = "rotate(-90deg)";
        this.questionBtn[this.index].style.fontWeight = "normal"
        return
      }

      this.wrap[i].style.height = 0
      this.blueBorder[i].style.width = 0
      this.greyBorder[i].style.width = "100%";
      this.icon[i].style.transform = "rotate(-90deg)";
      this.questionBtn[i].style.fontWeight = "normal"
      this.questionBtn[i].classList.remove("open")
      this.svgIcon[i].classList.remove("open")
      this.svgWrap[i].classList.remove("open")

      if (event.path[0] == this.questionBtn[i] || event.path[0] == this.icon[i] || event.path[0] == this.svgIcon[i] || event.path[0] == this.svgWrap[i]) {
        this.index = i
      }

    }

    this.questionBtn[this.index].classList.add("open")
    this.svgIcon[this.index].classList.add("open")
    this.svgWrap[this.index].classList.add("open")
    this.questionBtn[this.index].style.fontWeight = "600"
    this.icon[this.index].style.transform = "rotate(90deg)"
    this.wrap[this.index].style.height = "100px"
    this.greyBorder[this.index].style.width = 0;
    this.blueBorder[this.index].style.width = "100%"

  }

  answerQuestion = [
    {question:"Що буде, якщо я засуну гілку діаметром більше максимального",answer:"При критичних навантаженнях подрібнювача, спрацьовує запобіжна муфта, або теплове реле, яке допоможе запобігти поломці агрегата (подрібнювача, установки)."},
    {question:"Для яких котлів підходять дрова нарубані Вашим подрібнювач?",answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci at cum distinctio dolor dolorum eaque eos inventore nostrum numquam quasi quia, quibusdam quis quo similique tempore ullam vero?"},
    {question:"Яка витрата палива ваших двигунів?",answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci at cum distinctio dolor dolorum eaque eos inventore nostrum numquam quasi quia, quibusdam quis quo similique tempore ullam vero?"},
    {question:"Наскільки вистачає ваших ножів?",answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci at cum distinctio dolor dolorum eaque eos inventore nostrum numquam quasi quia, quibusdam quis quo similique tempore ullam vero?"},
    {question:"Чи працюєте Ви за безготівковим розрахунком?",answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci at cum distinctio dolor dolorum eaque eos inventore nostrum numquam quasi quia, quibusdam quis quo similique tempore ullam vero?"},
    {question:"Скільки у вас ножів на валах в подрібнювачах АМ-80 і АМ-120?",answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci at cum distinctio dolor dolorum eaque eos inventore nostrum numquam quasi quia, quibusdam quis quo similique tempore ullam vero?"},
    {question:"Чи можливо придбання установки в зборі але без двигуна?",answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci at cum distinctio dolor dolorum eaque eos inventore nostrum numquam quasi quia, quibusdam quis quo similique tempore ullam vero?"},
    {question:"Можу я придбати Ваш товар в кредит?",answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci at cum distinctio dolor dolorum eaque eos inventore nostrum numquam quasi quia, quibusdam quis quo similique tempore ullam vero?"}
  ]

}
