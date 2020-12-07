import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  @Input() userInfo;
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }
 
}