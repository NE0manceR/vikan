import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/layout.service';

import { Router } from '@angular/router';
//import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { UserService } from '../../services/admin-services/user.service';
//import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-load-admin',
  templateUrl: './load-admin.component.html',
  styleUrls: ['./load-admin.component.scss']
})
export class LoadAdminComponent implements OnInit {
  userInfo=true;
  board: string;
  errorMessage: string;

  constructor(
    private userService: UserService, 
    private router: Router,
    //private tokenService: TokenStorageService,
    public layoutService: LayoutService) { }

  ngOnInit() {
    // if(this.tokenService.getAuthorities()[0] === 'ROLE_ADMIN') {
    //   this.userService.getAdminBoard().subscribe(
    //     data => {
    //       console.log(data)
    //       this.userInfo = {
    //         name: data.user.name,
    //         
    //       };
    //       this.board = data.description;
    //     },
    //     error => {
    //       this.router.navigateByUrl(`/`);
    //       this.errorMessage = `${error.status}: ${error.error}`;
    //     }
    //   );
    // }
    
   }
}
