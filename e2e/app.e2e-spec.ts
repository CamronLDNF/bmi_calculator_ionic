import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('Home screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Calculator', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Calculator');
      });
    });

    it('should allow user to fill in form and receive results', () => {
      page.fillInForm(70, 150);
      expect(page.results_card_header()).toContain('BMI Calculation');
      expect(page.results_card_content()).toContain('BMI: 31.11');
      expect(page.results_card_content()).toContain('You are Obese');
    });
  })
});