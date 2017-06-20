import { TwjExamenApiParedesAndresPage } from './app.po';

describe('twj-examen-api-paredes-andres App', () => {
  let page: TwjExamenApiParedesAndresPage;

  beforeEach(() => {
    page = new TwjExamenApiParedesAndresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
