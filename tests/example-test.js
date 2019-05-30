import HomePage from '../page-objects/home-page';
import ResultPage from '../page-objects/result-page';
import LoginPage from '../page-objects/login-page';

fixture('Example')
  .page('https://quantocustacasar.wedy.com/')
  
  test('Redirect to signup page when click to see all services', async t => {
    await HomePage.search('São paul');
    await ResultPage.clickSeeMoreResults();
    await t.expect(LoginPage.createAccountContent).eql('Criar conta com e-mail');
  }); 

  test('Redirect to signup page when click to get a quote', async t=> {
    await HomePage.clickGetQuote();
    await t.expect(LoginPage.createAccountContent).eql('Criar conta com e-mail');
  })