import { CarbonAngularStarterPage } from './app.po';

describe('front-vikan App', () => {
	let page: CarbonAngularStarterPage;

	beforeEach(() => {
		page = new CarbonAngularStarterPage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('app works!');
	});
});
