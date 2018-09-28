var assert = require('assert');
var actions = require('./actions.js');

describe('e2e testing -> losestudiantes.co', function() {

  it('LogIn / LogOut Success', function () {
      actions.gotoHomepage(true);
      actions.login('f.arruza@uniandes.edu.co', '1234567890', '');
      actions.logout();
  });

  it('LogIn Failed', function () {
      actions.gotoHomepage();
      actions.login('f.arruza@uniandes.edu.co', 'xxxxxxxxxx', 'Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
  });

  it('SignUp', function() {
      actions.gotoHomepage();
      actions.signup('Fernando', 'Arruza', 'f.arruza@uniandes.edu.co', '1234567890', '16', true, 'Ocurrió un error activando tu cuenta');
  });

  it('Search professor', function() {
    actions.gotoHomepage();
    actions.search_professor('Fernando Arruza Hedman', 'Fernando Arruza Hedman');    
  });
});
