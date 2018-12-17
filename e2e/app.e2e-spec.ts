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

    it('should have an input field for Weight', () => {
      expect(page.getFieldName()).toContain('Weight (kg)');
    });

    // it('should have an input field for Height', () => {
    //   expect(page.getFieldName()).toContain('Height (cm)');
    // });

    // it('should calculate BMI and display results', () => {
    //   page.fillInForm(1000, 'Female', 20);
    //   expect(page.results_card_header()).toContain('Cooper Test Result');
    //   expect(page.results_card_content()).toContain('Gender: female, Age: 20  Result: Poor');
    // });

  })

  // describe('about page', () => {
    
  // })

});