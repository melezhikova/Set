import Team from '../app';
import Character from '../basic';

test('should add new member', () => {
  const ann = new Character ('Ann');
  const members = new Team ();
  const result = members.add(ann);
  const expected = new Set({name: 'ann'});
  
  expect(result).toEqual(expected);
});

test('should add new members', () => {
  const ann = new Character ('Ann');
  const ivan = new Character ('Ivan');
  const members = new Team ();
  const result = members.addAll([ann, ivan]);
  const expected = new Set([{name: 'ann'}, {name: 'ivan'}]);
  
  expect(result).toEqual(expected);
});
