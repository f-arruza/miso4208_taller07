exports.gotoHomepage = function(splash) {
  browser.url('/');
  if(splash) {
    browser.click('button=Cerrar');
  }
};

exports.login = function(email, password, message) {
  browser.waitForVisible('.botonIngresar', 5000);
  browser.element('.botonIngresar').click();

  browser.waitForVisible('.cajaLogIn', 5000);
  var cajaLogIn = browser.element('.cajaLogIn');

  var mailInput = cajaLogIn.element('input[name="correo"]');
  mailInput.click();
  mailInput.keys(email);

  var passwordInput = cajaLogIn.element('input[name="password"]');
  passwordInput.click();
  passwordInput.keys(password);

  cajaLogIn.element('button=Ingresar').click()
  if(message == '') {
    browser.waitForVisible('button[id="cuenta"]', 5000);
    expect(browser.isVisible('button[id="cuenta"]')).to.be.equals(true);
  }
  else {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(message);
  }
};

exports.logout = function() {
  browser.waitForVisible('button[id="cuenta"]', 5000);
  browser.click('button[id="cuenta"]');
  var userBox = browser.element('div[title="cuenta"]');
  userBox.element('a[role="menuitem"]').click();
};

exports.signup = function(firstname, lastname, email, password, program_id, accept, message) {
  browser.waitForVisible('.botonIngresar', 5000);
  browser.element('.botonIngresar').click();

  browser.waitForVisible('.cajaSignUp', 5000);
  var cajaSignUp = browser.element('.cajaSignUp');

  var nombreInput = cajaSignUp.element('input[name="nombre"]');
  nombreInput.click();
  nombreInput.keys(firstname);

  var apellidoInput = cajaSignUp.element('input[name="apellido"]');
  apellidoInput.click();
  apellidoInput.keys(lastname);

  var correoInput = cajaSignUp.element('input[name="correo"]');
  correoInput.click();
  correoInput.keys(email);

  var passwordInput = cajaSignUp.element('input[name="password"]');
  passwordInput.click();
  passwordInput.keys(password);

  cajaSignUp.element('[type="checkbox"]').click();
  cajaSignUp.element('select[name="idPrograma"]').selectByValue(program_id)
  if(accept) {
    cajaSignUp.element('input[name="acepta"]').click();
  }
  browser.click('button=Registrarse');

  browser.waitForVisible('.sweet-alert', 5000);
  var alertText = browser.element('.sweet-alert').element('h2').getText();
  expect(alertText).to.include(message);
};

exports.delay = function(ms) {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while(ms_passed < ms) {
        var d = new Date();  // Possible memory leak?
        var ticks = d.getTime();
        ms_passed = ticks - cur_ticks;
        // d = null;  // Prevent memory leak?
    }
};
