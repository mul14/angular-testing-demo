import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('angular-test-demo app is running!');
  // });

  it('should increase counter to 1', () => {
    browser.get('http://localhost:4200');

    const counter = element(by.id('counter'))

    expect(counter.getText()).toBe('0')

    element(by.id('increase')).click()

    expect(counter.getText()).toBe('1')
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
