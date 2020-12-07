import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll",()=>{
        if(window.scrollY < 182) {
        this.showContacts = false;
      }
      if(window.scrollY > 182) {
        this.showContacts = true;
      }
      
      
    })
  }
  showContacts = false;

  test() {
      window.scrollTo({top:500,behavior:'smooth'})
  }
 
  
}
