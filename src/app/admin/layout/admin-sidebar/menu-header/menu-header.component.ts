import { Component, OnInit } from '@angular/core';
//import { TokenStorageService } from 'src/app/auth/token-storage.service';
@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  user_name:any;
  user_role:any;
  constructor(
    //private tokenService: TokenStorageService
    ) { 
    //this.user_name= this.tokenService.getUsername();
    //this.user_role= this.tokenService.getAuthorities();
  }

  ngOnInit() {
     
  }
  today: number = Date.now();
  month: string = this.ukrMonth(new Date().getMonth())

  ukrMonth(monthNum: number) {

    switch (monthNum) {
      case 0:
        return "січня";
      case 1:
        return "лютого";
      case 2:
        return "березня";
      case 3:
        return "квітня";
      case 4:
        return "травня";
      case 5:
        return "червня";
      case 6:
        return "липня";
      case 7:
        return "серпня";
      case 8:
        return "вересня";
      case 9:
        return "жовтня";
      case 10:
        return "листопада";
      default:
        return "грудня";
    }
  }

}
