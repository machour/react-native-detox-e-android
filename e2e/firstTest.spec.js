describe('Example', () => {

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen from e2e/firstTest.js', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap from e2e/firstTest.js', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

})
