var assert = require('assert');
var actions = require('./actions.js');

describe('e2e testing -> losestudiantes.co', function() {

  it('LogIn / LogOut Success', function () {
      actions.gotoHomepage(true);
      actions.login('f.arruza@uniandes.edu.co', 'xxxxxxxxxx', '');
      actions.logout();
  });

  it('LogIn Failed', function () {
      actions.gotoHomepage();
      actions.login('f.arruza@uniandes.edu.co', 'xxxxxxxxxx', 'Intenta de nuevo por favor.');
  });

  it('SignUp', function() {
      actions.gotoHomepage();
      actions.signup('Fernando', 'Arruza', 'f.arruza@uniandes.edu.co', 'xxxxxxxxxx', '16', true, 'Ocurrió un error activando tu cuenta');
  });

  it('Search professor', function() {
    actions.gotoHomepage();

    browser.waitForVisible('input[role="combobox"]', 5000);
    browser.setValue('input[role="combobox"]', 'Fernando Arruza Hedman');
    actions.delay(2000);
    browser.element('input[role="combobox"]').keys("Enter");

    browser.waitForVisible('.descripcionProfesor', 5000);
    expect(browser.getText('.nombreProfesor')).to.include('Fernando Arruza Hedman');
  });
});
