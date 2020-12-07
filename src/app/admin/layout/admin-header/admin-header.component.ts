import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
//import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  isActive = true;
  constructor(
    public layoutService: LayoutService,
    private router: Router,
    //private tokenStorage: TokenStorageService
    ) {

  }

  onClickMe() {
      this.layoutService.toggle() ;
      this.isActive = !this.isActive;

  }
      
  ngOnInit() {
  }
  signOut(){
    //this.tokenStorage.signOut();
    this.router.navigateByUrl(`/`);
  }
}

