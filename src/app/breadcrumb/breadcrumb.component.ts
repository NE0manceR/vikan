import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input()class
  @Input()routerLink
 
  constructor() { }

  ngOnInit() {
  }

  activeHeaderLink
  linkIndex
  checkLink
  localPath

  checkPath() {
    this.localPath = ['/enterprise', '/catalog', '/raw', '/service', '/faq', '/contacts']
    this.activeHeaderLink = document.querySelectorAll('.link-underline')

    for (let indexCard = 0; indexCard < 5; indexCard++) {
      if (window.location.pathname == `/catalog/sort-line/${indexCard}`) {
        this.activeHeaderLink[1].classList.add("activLink")
      }

    }

    if (window.location.pathname === "/catalog/sort-line") {
      this.activeHeaderLink[1].classList.add("activLink")
    }

    for (let checkPath = 0; checkPath < this.localPath.length; checkPath++) {
      if (window.location.pathname === this.localPath[checkPath]) {
        this.activeHeaderLink[checkPath].classList.add("activLink")
      }

    }
  }


}
