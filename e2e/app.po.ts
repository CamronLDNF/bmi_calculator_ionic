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


  // fillInForm(weight, height) {
  //     element(by.css('.select')).click().then(() => {  // find the dropdown and click on it

  //     element(by.cssContainingText('.button-inner', gender)).click(); // click the gender option you want
  //     element(by.cssContainingText('.button-inner', 'OK')).click();  // click the OK button

  //   })

}