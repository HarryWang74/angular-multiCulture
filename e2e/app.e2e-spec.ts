import { EnvironmentAngularXPage } from './app.po';

describe('environment-angular-x App', () => {
  let page: EnvironmentAngularXPage;

  beforeEach(() => {
    page = new EnvironmentAngularXPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
