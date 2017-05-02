import { StylelintConfigurator3Page } from './app.po';

describe('stylelint-configurator3 App', () => {
  let page: StylelintConfigurator3Page;

  beforeEach(() => {
    page = new StylelintConfigurator3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
