const { isValidPassword } = require('./password');

test('8 märki on lubatud', () => {
  expect(isValidPassword('abcdefgh')).toBe(true);
});
test('7 märki ei ole piisav', () => {
  expect(isValidPassword('abcdefg')).toBe(false);
});
test('9 märki on lubatud', () => {
  expect(isValidPassword('abcdefghi')).toBe(true);
});
test('tühi parool ei ole lubatud', () => {
  expect(isValidPassword('')).toBe(false);
});

test('ainult tühikud ei ole lubatud', () => {
  expect(isValidPassword('        ')).toBe(false);
});

test('tühikud sõnade vahel on lubatud', () => {
  expect(isValidPassword('salajane parool')).toBe(true);
});