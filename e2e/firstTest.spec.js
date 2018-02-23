describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await waitFor(element(by.id('welcome')))
        .toBeVisible()
        .withTimeout(10000)
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await waitFor(element(by.id('hello')))
        .toBeVisible()
        .withTimeout(10000)
    await expect(element(by.id('hello'))).toBeVisible();
  });

})
