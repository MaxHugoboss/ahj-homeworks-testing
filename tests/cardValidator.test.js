const { getCardType, luhnCheck } = require('../src/cardValidator');

test('Valid Visa card', () => {
  expect(getCardType('4111111111111111')).toBe('visa');
  expect(luhnCheck('4111111111111111')).toBe(true);
});

test('Valid MasterCard', () => {
  expect(getCardType('5555555555554444')).toBe('mastercard');
  expect(luhnCheck('5555555555554444')).toBe(true);
});

test('Valid American Express card', () => {
  expect(getCardType('378282246310005')).toBe('amex');
  expect(luhnCheck('378282246310005')).toBe(true);
});

test('Invalid card number', () => {
  expect(luhnCheck('1234567812345678')).toBe(false);
});

test('Unknown card type', () => {
  expect(getCardType('1234567812345670')).toBe(null);
});
