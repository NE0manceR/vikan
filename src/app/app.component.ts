import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private translateService: TranslateService) {}
  ngOnInit(): void {
		let currentLang = localStorage.getItem('lang');
		if(!currentLang){
			localStorage.setItem('lang', environment.defaultLocale);
			this.translateService.use(environment.defaultLocale);
		} else {
			this.translateService.use(currentLang);
		}
		
  }
}
