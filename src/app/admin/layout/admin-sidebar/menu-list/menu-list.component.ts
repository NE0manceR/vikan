import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../menu.items';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  public menuItems: any = [];
  isActive = true;
  constructor(private layoutService: LayoutService) { this.menuItems = MenuItems; }

  ngOnInit() {
  }
  onClickMe() {
    this.layoutService.toggle() ;
    this.isActive = !this. isActive;

}
}
