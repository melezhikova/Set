import Character from '../basic';

test('should create new Character', () => {
  const received = new Character('Ann');
  const expected = {
    name: 'Ann',
  };

  expect(received).toEqual(expected);
});

test('error whet try to create new Character', () => {
  function create() {
    return new Character('Annnnnnnnnn');
  }
  expect(create).toThrowError('Длина имени должна быть от 2 до 10 символов');
});
