var expect = require('chai').expect;
const wdio = require("webdriverio");

describe('Simple App testing', () => {

  beforeEach(() => {
    $("~app-root").waitForDisplayed(10000, false)
  });

  it('Login test: valid case', async => {
    $('~username').setValue("ibrahim");
    $('~password').setValue("123");

    $("~login").click();

    $("~loginstatus").waitForDisplayed(11000);
    const status = $("~loginstatus").getText();
    expect(status).to.equal('success');
  });

  it('Login test: invalid case', async => {
    $('~username').setValue("123");
    $('~password').setValue("ibrahim");

    $("~login").click();

    $("~loginstatus").waitForDisplayed(11000);
    const status = $("~loginstatus").getText();
    expect(status).to.equal('fail');
  });
});