import {Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute) {
  }
path
  @ViewChild("mobInput", {static: false}) mobInput: ElementRef
  @ViewChild("clearIcon", {static: false}) clearIcon: ElementRef



  ngOnInit(): void {
    this.currentLang = localStorage.getItem('lang');
    this.changeLang(this.langs.findIndex(item => item === this.currentLang), this.currentLang)

    this.route.queryParams.subscribe(() => {

    })
  }


  placeholder = '';
  langStyle;
  langPosition = 0;
  langStatus = false;
  headerBtn;
  currentLang = 'uk';
  langs = environment.locales;

  changeLang(poss, lang){   // change language  start
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);


    this.langStyle = document.querySelectorAll(".langStyle")
    this.headerBtn = document.querySelector(".header-btn")

    if (window.innerWidth <= 802 && this.langStatus == true) {
      for (let g = 0; g < this.langStyle.length; g++) {
        this.langStyle[g].style.webkitTransition = "0.3s"
        this.langStyle[g].style.right = this.langPosition + "px"
        this.langPosition += 50
      }
      this.langStatus = false
      this.headerBtn.style.display = "none"
      return
    }

    if (window.innerWidth <= 802 && this.langStatus == false) {
      for (let q = 0; q < this.langStyle.length; q++) {
        this.langPosition = 0
        this.langStyle[q].style.right = this.langPosition + "px"
        this.langStatus = true
      }

      for (let l = 0; l < this.langStyle.length; l++) {
        this.langStyle[l].style.fontWeight = 300;
        this.langStyle[l].style.zIndex = 0;
      }
      this.langStyle[poss].style.zIndex = 2;
      this.langStyle[poss].style.fontWeight = 600;

    }

    for (let p = 0; p < this.langStyle.length; p++) {
      this.langStyle[p].style.fontWeight = 300;
      this.langStyle[p].style.zIndex = 0;
    }

    this.langStyle[poss].style.zIndex = 2;
    this.langStyle[poss].style.fontWeight = 600;
    this.langStyle[poss].style.color = 'white';
    setTimeout(() => {
      this.headerBtn.style.display = "block"
    }, 150)
  }

  // change language  end

  mobileSearch;
  mobileSearchIcon;
  mobileSearchInput

  chekFocus(event) {
    this.mobileSearch = document.querySelector('.bx--search-input');
    console.log(event.target.className);
    console.log(event.target.className == "bx--search-input");
  }

  showSearch(event) {
    this.mobileSearchInput = document.querySelector('.bx--search-input');
    this.mobileSearch = document.querySelector('.mobile-search-wrap');
    this.mobileSearchIcon = document.querySelector('.mobile-search');
    this.mobInput.nativeElement.focus()
    this.mobileSearch.style.display = "block"
    setTimeout(() => {

      this.mobileSearch.style.transform = 'translateX(0)';

    })
  }


  hideMobSearch(event) {
    this.mobileSearch = document.querySelector('.mobile-search-wrap');
    this.mobileSearchIcon = document.querySelector('.mobile-search');
    this.mobileSearch.style.transform = 'translateX(4000px)';
    this.mobileSearchIcon.style.opacity = '1';
    this.clearIcon.nativeElement.style.display = "none"
    setTimeout(() => {
      this.mobileSearch.style.opacity = '0';
      this.mobileSearch.style.display = "none"
    }, 100);
  }

  showClearIcon() {

    if (this.mobInput.nativeElement.value == "") {
      this.clearIcon.nativeElement.style.display = "none"
    } else {
      this.clearIcon.nativeElement.style.display = "block"
    }

  }

  catalogMenu;

  showCatalog() {
    this.catalogMenu = document.querySelector('.catalog-menu');
    this.catalogMenu.style.transform = 'translateY(0)';
  }

  hideCatalog() {
    this.catalogMenu = document.querySelector('.catalog-menu');
    this.catalogMenu.style.transform = 'translateY(-350px)';
  }

  catalogUrl = [
    './../../../../assets/images/header/drop-menu-img/1.jpg',
    './../../../../assets/images/header/drop-menu-img/2.JPG',
    './../../../../assets/images/header/drop-menu-img/3.jpg',
    './../../../../assets/images/header/drop-menu-img/4.jpg',
    './../../../../assets/images/header/drop-menu-img/5.png',
    './../../../../assets/images/header/drop-menu-img/4.jpg',
  ];

  linkArray;
  setImg;
  imgindex;
  imgAction

  changeImg(event) {
    this.imgAction = document.querySelector(".catalog-menu-img")
    this.linkArray = document.querySelectorAll('.catalog-item-link');

    for (let h = 0; h < this.linkArray.length; h++) {
      if (event.path[0] == this.linkArray[h]) {
        this.setImg = this.catalogUrl[h];
        this.imgAction.style.opacity = 1
      }
    }
    this.imgAction.style.opacity = 1
  }

  resetImg() {
    this.imgAction = document.querySelector(".catalog-menu-img")
    this.setImg = '';
    this.imgAction.style.opacity = 0
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


  activeLink(event) {
    this.activeHeaderLink = document.querySelectorAll('.link-underline')
    this.checkLink = document.querySelectorAll('.linkAction')
    for (let c = 0; c < this.activeHeaderLink.length; c++) {
      this.activeHeaderLink[c].classList.remove("activLink")
      if (event.path[0] == this.activeHeaderLink[c] || event.path[0] == this.checkLink[c]) {
        this.linkIndex = c
      }
    }
    this.activeHeaderLink[this.linkIndex].classList.add("activLink")
  }

  resetLinkStatus($event) {
    this.activeHeaderLink = document.querySelectorAll('.link-underline')
    for (let f = 0; f < this.activeHeaderLink.length; f++) {
      this.activeHeaderLink[f].classList.remove("activLink")
    }
  }

  ngAfterViewInit() {
    document.getElementById('search-1').addEventListener('keyup', (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        this.router.navigate(['search']);
      }
    })
  }

  clearInput() {
    this.mobInput.nativeElement.focus()
    this.mobileSearch = document.querySelector('.mobile-search-wrap');
    this.mobileSearch.style.transform = 'translateX(0)';
    this.mobInput.nativeElement.value = ""
    this.mobInput.nativeElement.focus()
    this.clearIcon.nativeElement.style.display = "none"

  }
}
