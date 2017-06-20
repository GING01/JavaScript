import { TwjExamenParedesAndresPage } from './app.po';

describe('twj-examen-paredes-andres App', () => {
  let page: TwjExamenParedesAndresPage;

  beforeEach(() => {
    page = new TwjExamenParedesAndresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
