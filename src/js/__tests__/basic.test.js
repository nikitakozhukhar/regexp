import sum from '../basic';
import Validator from '../app';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

const validator = new Validator();

test('Допустимы только латинские буквы', () => {
  const result = validator.validateUsername('Евлампия');

  expect(result).toBe(false);
});

test('Имя не может содерать более трех цифр', () => {
  const result = validator.validateUsername('Marco1234Polo');

  expect(result).toBe(false);
});

test('Имя не может начинаться с цифр', () => {
  const result = validator.validateUsername('111MarcoPolo');

  expect(result).toBe(false);
});
test('Имя не может заканчиваться цифрами', () => {
  const result = validator.validateUsername('MarcoPolo11');

  expect(result).toBe(false);
});

test('Имя не может начинаться с символов "-" и "_"', () => {
  const result = validator.validateUsername('-MarcoPolo');
  const result2 = validator.validateUsername('_MarcoPolo');
  expect(result).toBe(false);
  expect(result2).toBe(false);
});
test('Имя не может заканчиваться символами "-" и "_"', () => {
  const result = validator.validateUsername('MarcoPolo-');
  const result2 = validator.validateUsername('MarcoPolo_');
  expect(result).toBe(false);
  expect(result2).toBe(false);
});
