import { ProjectTemplatePage } from './app.po';

describe('project-template App', () => {
  let page: ProjectTemplatePage;

  beforeEach(() => {
    page = new ProjectTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
