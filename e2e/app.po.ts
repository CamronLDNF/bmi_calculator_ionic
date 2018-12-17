import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName('ion-title')).getText();
  }

  getFieldName() {
    return element(by.tagName('ion-label')).getText();
  } 

  fillInForm(weight, height) {

    let weight_input = element.all(by.css('.text-input')).first();
    let height_input = element.all(by.css('.text-input')).last();

    weight_input.clear().then(() => {
      weight_input.sendKeys(weight);
    });

    height_input.clear().then(() => {
      height_input.sendKeys(height);
    })
    
    element(by.cssContainingText('.button-inner', 'Calculate')).click();
  
  }

  results_card_header() {
      return element(by.css('ion-card-header')).getText();
  } 

  results_card_content() {
      return element(by.css('ion-card-content')).getAttribute('textContent');
  } 

}