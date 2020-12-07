import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
    isShowMenu: boolean = true
    
    constructor() { }

    toggle() {
        this.isShowMenu = !this. isShowMenu
        
    }
    getShowMenu(){
      return this.isShowMenu;
    }
     
}
