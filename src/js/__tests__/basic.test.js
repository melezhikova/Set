import Character from '../basic';

test('should create new Character', () => {
  const received = new Character('Ann');
  const expected = {
    name: 'Ann',
  };

  expect(received).toEqual(expected);
});
