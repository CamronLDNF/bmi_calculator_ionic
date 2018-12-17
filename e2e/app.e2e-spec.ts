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


  })
});