import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Integration Test: Detox via Jest as test runner (Not mocha)', () => {

it('should have welcome screen', async () => {
  await expect(element(by.id('welcome'))).toBeVisible();
});

it('should show hello screen after tap', async () => {
  await element(by.id('hello_button')).tap();
  await expect(element(by.text('Hello!!!'))).toBeVisible()
});


})
