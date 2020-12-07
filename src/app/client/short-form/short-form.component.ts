import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'short-form',
  templateUrl: './short-form.component.html',
  styleUrls: ['./short-form.component.scss']
})
export class ShortFormComponent{

  @Input() bcgColor ; //grey or light
  @Input()inputColor; //dark or light
  @Input()inputStyle="inputStyle-dark"




  label = "Імя";
  placeholder = "";
  labelPhone = "Телефон";
  phone = "";
  ibmButton = "primary";
  size = "normal" ;

  resetScroll() {
    setTimeout(()=>{
      window.scrollTo({top:0,behavior:'smooth'})
    },100)

  }

}


